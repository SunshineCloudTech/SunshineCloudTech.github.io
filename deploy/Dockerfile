# 第一阶段：构建应用
FROM node:lts-alpine AS builder

# 设置工作目录
WORKDIR /app

# 安装pnpm
RUN npm install -g pnpm

# 安装git和git-lfs
RUN apk update && apk add --no-cache git git-lfs 

# 克隆代码仓库
RUN git clone --recursive https://github.com/SunshineCloudTech/SunshineCloudTech.github.io.git

# 进入项目目录
WORKDIR /app/SunshineCloudTech.github.io

# 安装依赖
RUN corepack enable

# 安装nodejs-jieba
RUN npm ci

# 构建应用
RUN npm run docs:build

# 第二阶段：使用nginx部署
FROM nginx:stable-alpine

# 复制自定义nginx配置文件
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf

# 从构建器阶段复制构建好的文件到nginx的服务目录
COPY --from=builder /app/SunshineCloudTech.github.io/dist /usr/share/nginx/html

# 暴露80端口
EXPOSE 80

# 健康检查
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost/ || exit 1

# nginx在前台运行
CMD ["nginx", "-g", "daemon off;"]
