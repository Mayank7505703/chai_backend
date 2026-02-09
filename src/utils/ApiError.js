// ApiError class bana rahe hain jo JavaScript ke built-in Error ko extend karti hai
class ApiError extends Error{

  // Constructor tab call hota hai jab new ApiError() banate hain
  constructor(
    statusCode,                         // HTTP status code (404, 500, etc.)
    message="Something went wrong",     // Default error message agar koi message na diya ho
    errors=[],                          // Extra error details (mostly validation errors ke liye)
    stack=""                            // Error ka stack trace (optional)
  ){

    // Parent Error class ko call kar rahe hain aur message pass kar rahe hain
    super(message);

    // HTTP status code set kar rahe hain
    this.statusCode = statusCode

    // Error case me data hamesha null rahega
    this.data = null

    // Error ka message set kar rahe hain
    this.message = message

    // API response me success hamesha false hoga
    this.success = false

    // Extra errors (array) assign kar rahe hain
    this.errors = errors

    // Agar stack manually diya gaya hai
    if(stack){
      // To wahi stack use karo
      this.stack = stack
    }
    else{
      // Warna JS automatically stack trace generate kare
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

// Is class ko export kar rahe hain taki poore project me use ho sake
export default ApiError;
