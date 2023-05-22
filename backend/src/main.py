import uuid

import uvicorn
from src.log_setup import get_logger
from starlette.applications import Starlette
from starlette.requests import Request
from starlette.responses import JSONResponse, Response
from starlette.routing import Mount, Route
from starlette.staticfiles import StaticFiles

logger = get_logger(__name__)


async def test(request: Request) -> Response:
    logger.info(f"Received '{request.method}' request to {request.url}")
    return JSONResponse({"test-uuid": str(uuid.uuid4())})


app = Starlette(
    debug=True,
    routes=[
        Mount(
            "/api",
            routes=[Route("/test", test, methods=["GET"])],
        ),
        Mount("/", app=StaticFiles(directory="./static", html=True)),
    ],
)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8004)
