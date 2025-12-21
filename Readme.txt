# As i don't want to install nodejs locally
# So for 1st time, to setup files, run below command
# docker run -it --rm -v ${PWD}:/app -w /app node:24.12.0-alpine npm create vite@latest . -- --template react-ts  
# and in vite.config.ts file add
# export default defineConfig({
#   plugins: [react()],
#   server: {
#     host: true
#   }
# })

# to install dependency
# docker-compose run react-app npm install <package>

# run the server, 
# docker-compose up

# if change anything then use --build flag to rebuild the docker image first.
# docker-compose up --build

# stop the server
# docker-compose down