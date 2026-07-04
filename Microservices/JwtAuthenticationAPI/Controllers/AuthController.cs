using JwtAuthenticationAPI.Models;
using JwtAuthenticationAPI.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JwtAuthenticationAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly JwtService _jwtService;

    public AuthController(JwtService jwtService)
    {
        _jwtService = jwtService;
    }

    /// <summary>
    /// Authenticates a user and issues a JWT bearer token.
    /// </summary>
    /// <param name="request">The login credentials supplied by the client.</param>
    /// <returns>A JWT token and a success message when authentication succeeds.</returns>
    [HttpPost("login")]
    [ProducesResponseType(typeof(object), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    public IActionResult Login([FromBody] LoginRequest request)
    {
        var user = _jwtService.ValidateUser(request.Username, request.Password);

        if (user is null)
        {
            return Unauthorized(new { message = "Invalid username or password." });
        }

        var token = _jwtService.GenerateToken(user);

        return Ok(new
        {
            token,
            message = "Authentication successful. Use the token in the Authorization header as a Bearer token."
        });
    }

    /// <summary>
    /// Returns protected profile information for an authenticated caller.
    /// </summary>
    /// <returns>The authenticated user's profile data.</returns>
    [Authorize]
    [HttpGet("profile")]
    [ProducesResponseType(typeof(object), StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    public IActionResult Profile()
    {
        var username = User.Identity?.Name ?? User.FindFirst("username")?.Value ?? "unknown";
        var email = User.FindFirst(System.Security.Claims.ClaimTypes.Email)?.Value ?? string.Empty;
        var role = User.FindFirst(System.Security.Claims.ClaimTypes.Role)?.Value ?? "User";

        return Ok(new
        {
            username,
            email,
            role,
            message = "This endpoint is protected by JWT Authentication and Authorization."
        });
    }
}
