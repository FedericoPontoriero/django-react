from main import app, db
from flask_migrate import Migrate
from flask.cli import FlaskGroup

cli = FlaskGroup(app, db)

migrate = Migrate()
migrate.init_app(app, db)

if __name__ == "__main__":
    cli()
