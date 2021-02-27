FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:12
RUN apt-get update; apt-get -y install git wget lynx lynx-common;git clone --depth=1 https://github.com/Bash-it/bash-it.git ~/.bash_it;~/.bash_it/install.sh
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
EXPOSE 1337 3000 3003