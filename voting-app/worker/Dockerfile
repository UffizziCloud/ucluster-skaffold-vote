# Use specific platform names without variables
FROM mcr.microsoft.com/dotnet/sdk:7.0 as build

WORKDIR /source
COPY *.csproj .
RUN if [ "${TARGETPLATFORM}" = "linux/amd64" ]; then ARCH=x64; \
    elif [ "${TARGETPLATFORM}" = "linux/arm64" ]; then ARCH=arm64; \
    elif [ "${TARGETPLATFORM}" = "linux/arm64/v8" ]; then ARCH=arm64; \
    elif [ "${TARGETPLATFORM}" = "linux/arm/v7" ]; then ARCH=arm; \
    else ARCH=x64; fi \
    && dotnet restore -r linux-${ARCH}

COPY . .
RUN if [ "${TARGETPLATFORM}" = "linux/amd64" ]; then ARCH=x64; \
    elif [ "${TARGETPLATFORM}" = "linux/arm64" ]; then ARCH=arm64; \
    elif [ "${TARGETPLATFORM}" = "linux/arm64/v8" ]; then ARCH=arm64; \
    elif [ "${TARGETPLATFORM}" = "linux/arm/v7" ]; then ARCH=arm; \
    else ARCH=x64; fi \
    && dotnet publish -c release -o /app -r linux-${ARCH} --self-contained false --no-restore

# App image
FROM mcr.microsoft.com/dotnet/runtime:7.0
WORKDIR /app
COPY --from=build /app .
ENTRYPOINT ["dotnet", "Worker.dll"]