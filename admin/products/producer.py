import pika

params = pika.URLParameters("rabbitmqurl")

connection = pika.BlockingConnection(params)

channel = connection.channel()


def publish(method, body):
    channel.basic_publish(exchange="", routing_key="admin", body="hello")
