# Docker 部署指南

此文档介绍如何使用 Docker 来构建和部署 SunshineNotes 网站。

## 前提条件

- 安装 [Docker](https://www.docker.com/get-started)
- 确保您的机器上有足够的权限运行 Docker 命令

## 构建 Docker 镜像

在项目根目录执行以下命令来构建 Docker 镜像：

```bash
docker build -t sunshinenotes:latest -f deploy/Dockerfile .
```

## 运行 Docker 容器

构建完成后，可以使用以下命令启动容器：

```bash
docker run -d -p 80:80 --name sunshinenotes sunshinenotes:latest
```

这将在后台启动容器，并将容器的 80 端口映射到主机的 80 端口。

## 访问网站

启动容器后，可以通过浏览器访问 `http://localhost` 来查看网站。

## 停止容器

如果需要停止容器，可以执行：

```bash
docker stop sunshinenotes
```

## 重新启动容器

如果需要重新启动容器，可以执行：

```bash
docker start sunshinenotes
```

## Docker Compose 部署（可选）

如果您喜欢使用 Docker Compose 进行部署，可以创建一个 `docker-compose.yml` 文件，内容如下：

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

然后使用以下命令启动服务：

```bash
docker-compose up -d
```

## 环境变量（可选）

如果您的应用需要配置环境变量，可以在运行容器时通过 `-e` 参数设置：

```bash
docker run -d -p 80:80 -e NODE_ENV=production --name sunshinenotes sunshinenotes:latest
```

或者在 Docker Compose 文件中设置：

```yaml
services:
  sunshinenotes:
    # ...其他配置...
    environment:
      - NODE_ENV=production
```
