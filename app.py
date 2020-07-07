import numpy as np
from fastapi import FastAPI
from typing import Optional
from joblib import dump, load
from pathlib import Path
from pydantic import BaseModel

app = FastAPI()

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
    codeId:int = 0


def predict_gdp(year: int, co2: float, oil: float, meat: float, urban: float, eggs: float):
    oil /= 1000000 # MW -> terawatt
    x = np.array([[year, co2, oil, meat, urban, eggs]])
    x = scaler.transform(x)
    pred = model.predict(x)
    return pred


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.put("/pred")
def read_item(q: GDPQuery = None):
    gdp = predict_gdp(q.year, q.co2, q.oil, q.meat, q.urban, q.eggs)
    return { 'pred': { 'gdp' : gdp[0] } }