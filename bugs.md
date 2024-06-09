- BUG #1:
-- *routes/auth.js post /login* the docstrings state that an invalid login should raise  a 401 status code. Added a new Express error to raise the right status code.

- BUG #2:
-- *routes/auth.js post /login* User.authenticate did not include 'await'. This causes user to be assisgned a promise object instead of the user object. Since createTokenForUser is being called on a promise object, it can result in generating an incorrect token and potentially allowing unauthorized access. Added 'await'

- BUG #3:
-- *routes/users.js patch /:username* the docstrings state that if the user is not found, it should return a 404 error and the current error handling doesn't allow for that.Added additional error handling if the user is not found.

- BUG #4:
-- *routes/users.js patch /:username* the docstrings state that if a user attemptes to change a field that doesn't exist or is not allowed to be changed, an error should be thrown but as it stands there is no error for that. Added the allowed field and iterate over them to see if the fields included in the request body are allowed to be changed.

- BUG #5:
-- *routes/users.js delete /:username* the 'await' is missing from this function as well. This might allow you to get ther message: 'deleted' prompt but it returned a promise. added await and some error handling
- BUG #6:
-- *routes/users.js patch /:username* the current middleware setup is causing the user to have to be an admin in order to patch the user. But it should allow someone who is the matching user be able to to patch. Deleted requireAdmin middleware from the patch route
- BUG #7:
-- *middleware/auth.js authUser* the current middleware authUser function is not actually verifying the token with the SECRET_KEY . This could allow anyone to create a token with the payload stating they are an admin and then make changes when they are actually unauthorized.