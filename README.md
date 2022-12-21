# kafka-nodejs

[Kafka nedir](https://www.linkedin.com/pulse/kafka-terminolojisi-ve-mimarisi-emre-bozlak-pmp/?originalSubdomain=tr)

### Nodejs 

[kafkajs](https://kafka.js.org)


### Basic setup

[docker hub bitnami kafka page](https://hub.docker.com/r/bitnami/kafka)

bitnami **Apache Kafka development setup example** in [bitnami-basic-docker-compose.yml](bitnami-basic-docker-compose.yml)

#### Extra UI
[Kouncil](https://kouncil.io)
```
docker run -d -p 80:8080 -e bootstrapServers="KAFKA_BROKER_HOST:9092" consdata/kouncil:latest
```



### Advanced setup with UI

confluent kafka config with UI in [confluent-advanced-docker-compose.yml](confluent-advanced-docker-compose.yml)

UI monitor http://localhost:9021


