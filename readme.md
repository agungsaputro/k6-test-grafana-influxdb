# K6 Load Tes Graphql

#### load this test using k6.io tools. data visualization using grafana and influxdb



## Step by step
```
1. create folder src or anything you want
2. create file schema or scenario test
3. copy docker-compose.yml
```
## Run Docker Compose
```
docker-compose up -d \
    influxdb \
    grafana
```
## Run Your Testing Scenario File
```
docker-compose run -v \
    $PWD/folder:/folder \
    k6 run /folder/filescenario.js
```

## Open Grafana
```
http://localhost:3000
```
## Setup Data Source Grafana
![config](/images/config.png)

## Go to Dashboard
![Grafana](/images/grafana.png)
