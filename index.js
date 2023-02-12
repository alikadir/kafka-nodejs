import { Kafka } from 'kafkajs'

async function main(){

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
})

const producer = kafka.producer()

await producer.connect()
await producer.send({
  topic: 'test-topic',
  messages: [
    { 
      key:'my-key', 
      value: 'Hello KafkaJS user!' 
    },
  ],
})

await producer.disconnect()
  
}

main();
