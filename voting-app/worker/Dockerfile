# Use specific platform names without variables
FROM mcr.microsoft.com/dotnet/sdk:7.0 as build

WORKDIR /source
COPY *.csproj .
RUN case ${TARGETPLATFORM} in \
         "linux/amd64")  ARCH=x64  ;; \
         "linux/arm64")  ARCH=arm64  ;; \
         "linux/arm64/v8")  ARCH=arm64  ;; \
         "linux/arm/v7") ARCH=arm  ;; \
    esac \
    && dotnet restore -r linux-${ARCH}

COPY . .
RUN  case ${TARGETPLATFORM} in \
         "linux/amd64")  ARCH=x64  ;; \
         "linux/arm64")  ARCH=arm64  ;; \
         "linux/arm64/v8")  ARCH=arm64  ;; \
         "linux/arm/v7") ARCH=arm  ;; \
    esac \
    && dotnet publish -c release -o /app -r linux-${ARCH} --self-contained false --no-restore

# App image
FROM mcr.microsoft.com/dotnet/runtime:7.0
WORKDIR /app
COPY --from=build /app .
ENTRYPOINT ["dotnet", "Worker.dll"]
