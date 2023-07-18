아래 패키지를 설치해야함. 설치되지 않았다면
npm install -g nodemon
npm install -g eslint
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
실행시
export NODE_ENV=development
npm run dev
도커 이미지 생성시
docker build . -t sandbox/node-web-template
사용자명/프로젝트명
도커 컨테이너 생성 시
docker run -p 3000:3000 -e NODE_ENV=development -d sandbox/node- web-template

MySQL Docker 컨테이너 생성 및 실행
docker run --name node-mysql -e MYSQL_ROOT_PASSWORD=myseceretpassword -d -p 3306:3306 mysql:latest

Docker 컨테이너 리스트 출력
docker ps -a

MySQL Docker 컨테이너 시작/중지/재시작

# MySQL Docker 컨테이너 중지
$ docker stop node-mysql

# MySQL Docker 컨테이너 시작
$ docker start node-mysql

# MySQL Docker 컨테이너 재시작
$ docker restart node-mysql

MySQL Docker 컨테이너 접속
docker exec -it node-mysql bash# CoffeBack
