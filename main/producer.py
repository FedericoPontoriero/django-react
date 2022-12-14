#!/usr/bin/env python3
import pika, json

params = pika.URLParameters("rabbitmqurl")

connection = pika.BlockingConnection(params)

channel = connection.channel()


def publish(method, body):
    properties = pika.BasicProperties(method)
    channel.basic_publish(
        exchange="", routing_key="admin", body=json.dumps(body), properties=properties
    )
