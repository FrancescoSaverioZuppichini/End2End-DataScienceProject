# End2End-DataScienceProject

An example of an end to end Data Science Project.

### Data
We predict the GDP using `oil and co2`, `meat and eggs` and `urbanization`. The dataset can be found in `./dataset`. 

### Exploration

We explored and clean the dataset a little bit, this is done in an interactive notebook avaliable at `main.ipynb`

### Prediction

We trained a classic `RandomForest` regressor to prediction the GDP

### API

We used [`FastAPI`](https://fastapi.tiangolo.com/) to create a simple API to get a prediction. 

To start the webserver

```
uvicorn app:app --port 8080
```

**Doc** at `localhost:8080/docs`

### Web App

We used [React](https://it.reactjs.org/) to create an app where you can select different values for oil, meat, etc... and see the prediction GDP.

*Keep in mind that the aim of this project is to show an simple end-end workflow to create an data science app and not to showcase the best model to fit our dataset*