FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:12
RUN apt-get update
RUN apt-get -y install git redis-server
# EXPOSE 1337 3000 3003
RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" \
    && echo $SNIPPET >> "/root/.bashrc"
