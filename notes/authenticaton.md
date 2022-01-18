# Token based Authentication flow

1. Generate token and send to user email
2. Receive token from FE, verify token
	a. IF user registed, return user session
	b. ELSE create new user, return session

# Topics

- What technology used to generate verifyable token?
	- Considerations:
		- JWT can decode and see content without verfication needed. Instead of that, use JWE standard provided though `jose` library

# Services plans

- Token generate (required User info)
- Token verify and decode (required Token hash - secrect key stored somewhere stored somewhere in application)
- 
