import numpy as np
import os
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from typing import Optional
from joblib import dump, load
from pathlib import Path
from pydantic import BaseModel

print(os.path.dirname(os.path.realpath(__file__)))

app = FastAPI()
app.mount("/static", StaticFiles(
    directory=os.path.dirname(os.path.realpath(__file__)) + '/app/build/'),
    name="static")

checkpoints = Path('./checkpoints')
model = load(checkpoints / f"RandomForestRegressor-best.joblib")
scaler = load(checkpoints / f"scaler.joblib")


class GDPQuery(BaseModel):
    year: int
    co2: float
    oil: float
    meat: float
    urban: float
    eggs: float
    codeId: int = 0


def predict_gdp(year: int, co2: float, oil: float, meat: float, urban: float, eggs: float):
    oil /= 1000000  # MW -> terawatt
    x = np.array([[year, co2, oil, meat, urban, eggs]])
    x = scaler.transform(x)
    pred = model.predict(x)
    return pred


@app.get("/")
def read_root():
    with open('./app/build/index.html') as f:
        return HTMLResponse(f.read())


@app.put("/api/pred")
def read_item(q: GDPQuery = None):
    gdp = predict_gdp(q.year, q.co2, q.oil, q.meat, q.urban, q.eggs)
    return {'pred': {'gdp': gdp[0]}}
