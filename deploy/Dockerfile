# 第一阶段：构建应用
FROM node:20 AS builder

# 设置工作目录
WORKDIR /app

# 增加 Node.js 内存限制
ENV NODE_OPTIONS="--max-old-space-size=4096"

# 安装构建依赖
RUN apt update && apt install git python3 make g++ build-essential -y

# 安装 pnpm
RUN npm install -g pnpm

# 复制package.json和pnpm-lock.yaml
RUN git clone --recursive https://github.com/SunshineCloudTech/SunshineCloudTech.github.io
WORKDIR /app/SunshineCloudTech.github.io
# 安装依赖
RUN corepack enable

# 安装依赖
RUN npm ci

# 构建应用
RUN npm run docs:build

# 第二阶段：使用nginx部署
FROM nginx:stable-alpine

# 复制自定义nginx配置文件
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf

# 安装curl用于健康检查
RUN apk add --no-cache curl

# 从构建器阶段复制构建好的文件到nginx的服务目录
COPY --from=builder /app/SunshineCloudTech.github.io/dist /usr/share/nginx/html

# 暴露80端口
EXPOSE 80

# 健康检查
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost/ || exit 1

# nginx在前台运行
CMD ["nginx", "-g", "daemon off;"]
