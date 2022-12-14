from flask import json
import pika

params = pika.URLParameters("rabbitmqurl")

connection = pika.BlockingConnection(params)

channel = connection.channel()


def publish(method, body):
    properties = pika.BasicProperties(method)
    channel.basic_publish(
        exchange="", routing_key="main", properties=properties, body=json.dumps(body)
    )
