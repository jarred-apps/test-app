# Build Frontend
FROM node:latest as frontend

WORKDIR /usr/src/app/frontend
COPY ./frontend .

RUN npm install
RUN npm run build-docker

# Build Rust app
FROM python:latest

WORKDIR /usr/src/app
COPY --from=frontend /usr/src/app/frontend/dist/ /usr/src/app/static/
COPY ./backend /usr/src/app/

# Run app
RUN pip install -r requirements.txt
EXPOSE 8080
CMD ["uvicorn", "--host", "0.0.0.0", "--port", "8080", "src.main:app"]