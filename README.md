# perplexica-polaris

Fork from https://github.com/ItzCrazyKns/Perplexica

修改 backend/config.toml 中的 API_KEYS

```bash
cd backend
yarn install
yarn build
yarn run
```

```bash
cd frontend
yarn install
yarn build
yarn run
```

```bash
docker run -d \
  --name searxng \
  -v $(pwd)/searxng:/etc/searxng:rw \
  -p 4000:8080 \
  docker.io/searxng/searxng:latest
```

访问 http://localhost:10001 即可开始使用
