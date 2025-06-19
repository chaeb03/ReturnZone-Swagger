---
openapi: 3.0.1
info:
  title: OpenAPI definition
  version: v0
servers:
- url: http://localhost:8080
  description: Generated server url
paths:
  "/join":
    post:
      tags:
      - join-controller
      operationId: joinProcess
      parameters:
      - name: joinDTO
        in: query
        required: true
        schema:
          "$ref": "#/components/schemas/JoinDTO"
      responses:
        '200':
          description: OK
          content:
            "*/*":
              schema:
                type: string
  "/api/login":
    post:
      tags:
      - login-controller
      operationId: login
      requestBody:
        content:
          application/json:
            schema:
              "$ref": "#/components/schemas/LoginDTO"
        required: true
      responses:
        '200':
          description: OK
          content:
            "*/*":
              schema:
                type: object
  "/admin":
    get:
      tags:
      - admin-controller
      operationId: adminP
      responses:
        '200':
          description: OK
          content:
            "*/*":
              schema:
                type: string
  "/":
    get:
      tags:
      - main-controller
      operationId: mainP
      responses:
        '200':
          description: OK
          content:
            "*/*":
              schema:
                type: string
components:
  schemas:
    JoinDTO:
      type: object
      properties:
        userId:
          type: string
        password:
          type: string
        email:
          type: string
        gender:
          type: string
        joinDate:
          type: string
          format: date
    LoginDTO:
      type: object
      properties:
        userId:
          type: string
        password:
          type: string
