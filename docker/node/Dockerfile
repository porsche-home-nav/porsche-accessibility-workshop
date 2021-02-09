FROM node:12.16.1-stretch@sha256:facc1cbde6e5aa3255092b1a1417451953c80bd31ab5a4403f8bcd90b90a8407

ENV PATH="/opt/kitchen-sink/bin:${PATH}"

COPY ./entrypoint.sh "/opt/kitchen-sink/entrypoint.sh"
COPY ./bin "/opt/kitchen-sink/bin"
COPY ./shared "/opt/kitchen-sink/shared"

ENTRYPOINT ["/opt/kitchen-sink/entrypoint.sh"]
