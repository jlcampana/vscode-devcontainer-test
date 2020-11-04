FROM registry.access.redhat.com/rhel:7.7
# This image will be initialized with "npm run $NPM_RUN"
# Environment:
# * $NPM_RUN - Select an alternate / custom runtime mode, defined in your package.json files' scripts section (default: npm run "start").
# Node.js Version
ENV NODE_VERSION=${NODE_VERSION} \
  NPM_RUN=start \
  NODE_VERSION=12.16.0 \
  NODE_HOME=/opt/node \
  APP_ROOT=/opt/app-root \
  HOME=/opt/app-root/src \
  PATH=/opt/app-root/src/bin:/opt/app-root/bin:/opt/node/bin:$PATH
RUN echo "Installing required packages ..." \
  && INSTALL_PKGS="make gcc gcc-c++ freetype fontconfig bzip2 jq nss_wrapper rsync git" \
  && getent ahostsv4 mirrorlist.centos.org \
  && yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm \
  && (sed -i 's/enabled=1/enabled=0/g' /etc/yum/pluginconf.d/fastestmirror.conf || true ) \
  && sed -i 's/^#baseurl/baseurl/g' /etc/yum.repos.d/*.repo \
  && sed -i 's/^mirrorlist/#mirrorlist/g' /etc/yum.repos.d/*.repo \
  && sed -i '/^metalink/d' /etc/yum.repos.d/*.repo \
  && sed -i 's/^baseurl=.*$/baseurl=http\:\/\/ftp\.tu\-chemnitz\.de\/pub\/linux\/fedora\-epel\/7\/x86_64/g' /etc/yum.repos.d/epel.repo \
  && yum -y upgrade \
  && yum install -y $INSTALL_PKGS \
  && rpm -V $INSTALL_PKGS \
  && yum -y clean all
# Download and unarchive Node.js
RUN echo "Installing Node.js ${NODE_VERSION} ..." \
  && curl -fsSL https://nodejs.org/download/release/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.gz -o /tmp/node.tar.gz \
  && tar -C /opt -xzf /tmp/node.tar.gz \
  && rm -f /tmp/node.tar.gz \
  && echo "Linking Node to ${NODE_HOME} ..." \
  && ln -s /opt/node-v${NODE_VERSION}-linux-x64 ${NODE_HOME} \
  && mkdir -p /opt/node-v${NODE_VERSION}-linux-x64/etc \
  && echo "Installing nodemon 17.4 and nsp 3.2.1 ..." \
  && npm install nodemon@1.17.4 -g \
  && npm install nsp@3.2.1 -g