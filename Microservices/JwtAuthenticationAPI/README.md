# JwtAuthenticationAPI

This project demonstrates JWT authentication and authorization in ASP.NET Core 10 with Swagger support.

## Authentication flow

1. Call POST /api/auth/login with username `admin` and password `Password123!`.
2. Copy the returned JWT token.
3. In Swagger, click Authorize and paste the token as a Bearer token.
4. Call GET /api/auth/profile to access the protected endpoint.
