import React from "react";

const Contact = () => {
    return(
        <div>
            <div class="text-center" margin="20px">
                <h1>Contact Us</h1>
            </div>
            <form>
                <div class="form-group col-md-4 mx-auto">
                    <label for="exampleInputEmail1">First Name</label>
                    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="nameHelp" placeholder="Enter First Name"></input>
                    <label for="exampleInputPassword1">Last Name</label>
                    <input type="name" class="form-control" id="exampleInputPassword1" placeholder="Last Name"></input>
                    <label for="exampleInputPassword1">Phone Number</label>
                    <input type="name" class="form-control" id="exampleInputPassword1" placeholder="Phone Number"></input>
                    <label for="exampleInputPassword1">Email Address</label>
                    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Email Address"></input>
                    <label for="exampleInputPassword1">Country</label>
                    <input type="name" class="form-control" id="exampleInputPassword1" placeholder="Country"></input>
                    <label for="exampleInputPassword1">Message</label>
                    <textarea type="name" class="form-control" id="exampleInputPassword1" placeholder="Message"></textarea>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>

                </div>
               
                </form>
        </div>
    )

}

export default Contact;