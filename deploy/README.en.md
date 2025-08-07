# Docker Deployment Guide

This document explains how to build and deploy the SunshineNotes website using Docker.

## Prerequisites

- Install [Docker](https://www.docker.com/get-started)
- Ensure you have sufficient permissions to run Docker commands on your machine

## Building the Docker Image

Run the following command in the project root directory to build the Docker image:

```bash
docker build -t sunshinenotes:latest -f deploy/Dockerfile .
```

## Running the Docker Container

After the build is complete, you can start the container with the following command:

```bash
docker run -d -p 80:80 --name sunshinenotes sunshinenotes:latest
```

This will start the container in the background and map container port 80 to host port 80.

## Accessing the Website

After starting the container, you can access the website by navigating to `http://localhost` in your browser.

## Stopping the Container

If you need to stop the container, run:

```bash
docker stop sunshinenotes
```

## Restarting the Container

To restart the container, run:

```bash
docker start sunshinenotes
```

## Docker Compose Deployment (Optional)

If you prefer using Docker Compose for deployment, you can create a `docker-compose.yml` file with the following content:

```yaml
version: '3'
services:
  sunshinenotes:
    build:
      context: .
      dockerfile: deploy/Dockerfile
    ports:
      - "80:80"
    restart: unless-stopped
```

Then start the service with:

```bash
docker-compose up -d
```

## Environment Variables (Optional)

If your application requires environment variables, you can set them when running the container using the `-e` parameter:

```bash
docker run -d -p 80:80 -e NODE_ENV=production --name sunshinenotes sunshinenotes:latest
```

Or in your Docker Compose file:

```yaml
services:
  sunshinenotes:
    # ...other configuration...
    environment:
      - NODE_ENV=production
```
