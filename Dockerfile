# Use latest node version 10.x
FROM alpine:3.8
# create app directory in container
RUN mkdir -p /app

# set /app directory as default working directory
WORKDIR /app

# copy all file from current dir to /app in container
COPY ./express-ts-boilerplate /app/

# expose port 9000
EXPOSE 9000

# cmd to start service
CMD [ "sh", "-c", "./express-ts-boilerplate" ]
