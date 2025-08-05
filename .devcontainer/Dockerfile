FROM sunshinecloud007/base-bookworm:lite
USER matrix0523
LABEL maintainer="SunshineCloudSoft"
ENV DEBIAN_FRONTEND=noninteractive
ENV DEBCONF_NONINTERACTIVE_SEEN=true
RUN sudo apt-get update && \
    sudo apt-get install -y --no-install-recommends supervisor*
RUN sudo chmod -R 755 /app
RUN sudo chown -R matrix0523:matrix0523 /app
# Setup Cloudflare Tunnel
WORKDIR /SunshineCloud/
RUN sudo mkdir -p --mode=0755 /usr/share/keyrings
RUN sudo curl -fsSL https://pkg.cloudflare.com/cloudflare-main.gpg | sudo tee /usr/share/keyrings/cloudflare-main.gpg >/dev/null
RUN echo 'deb [signed-by=/usr/share/keyrings/cloudflare-main.gpg] https://pkg.cloudflare.com/cloudflared any main' | sudo tee /etc/apt/sources.list.d/cloudflared.list
RUN sudo apt-get update && sudo apt-get install cloudflared -y
# Cloudflare Tunnel Sample CMD ["cloudflared tunnel --url http://localhost:7860 --metrics 0.0.0.0:8080"]
# Setup Supervisor
RUN sudo mkdir -vp /etc/supervisor/conf.d
# COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
ENTRYPOINT ["/usr/bin/bash", "-c"]
CMD ["sudo /usr/local/bin/docker-init.sh bash"]
