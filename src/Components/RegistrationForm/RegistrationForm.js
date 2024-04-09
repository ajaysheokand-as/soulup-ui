import React from 'react'
import './RegistrationForm.css'
function RegistrationForm() {
    return (
        <div className='container bg-danger bg-gradient p-5'>
            <div className='container bg-body '>
                <form className='pb-2'>
                    <div className='row'>
                        <div className="col-12 text-center fs-1 fw-bold">Registration Form </div>
                        <div className='col-12 fs-3 text-center fw-bold'>Fill Your details</div>
                        <div className='row m-lg-2'>
                            <div className='col-lg-6 d-flex justify-content-between  flex-wrap'>
                                <label className='mx-lg-3 fs-4 fw-bold'>Name: </label><input type="text" className='w-lg-50'/>
                            </div>
                            <div className='col-lg-6 d-flex justify-content-between flex-wrap'>
                                <label className='mx-lg-3  fs-4 fw-bold'>Age: </label><input type="number"  className='w-lg-50'/>
                            </div>
                        </div>
                        <div className='row m-lg-2 '>
                            <div className='col-lg-6 d-flex justify-content-between flex-wrap'>
                                <label className='mx-lg-3 fs-4 fw-bold'>Occupation: </label><input type="text"  className='w-lg-50'/>
                            </div>
                            <div className='col-lg-6 d-flex justify-content-between flex-wrap'>
                                <label className='mx-lg-3 fs-4 fw-bold'>Language:  </label><input type="text"  className='w-lg-50' />
                            </div>
                        </div>
                        <div className='row m-lg-2'>
                            <div className='col-lg-6 d-lg-flex justify-content-between '>
                                <label className='mx-lg-3 fs-4 fw-bold'>Gender: </label>
                                
                                <div class=" form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Male
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Female
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        Other
                                    </label>
                                </div>
                            </div>
                            <div className='col-lg-6 d-flex justify-content-between flex-wrap'>
                                <label className='fs-4 fw-bold'>Contact No. : </label><input type="number"  className='w-lg-50' />
                            </div>
                        </div>
                        <div className='row m-lg-2'>
                            <div className='col-lg-6 fs-4 fw-bold'>
                                <label>Maritial Status</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>--select--</option>
                                    <option value="1">Married</option>
                                    <option value="2">Single</option>
                                    <option value="3">Divorced</option>
                                    <option value="4">Widow</option>
                                </select>
                            </div>
                        </div>
                        <div className='row m-lg-2'>
                            <lavel className=' fs-lg-4 fw-lg-bold'>Explain the Circumstances You Came Out From</lavel>
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea"> Brief Description ....</label>
                            </div>
                        </div>
                    </div>
                    <div className='row m-lg-2'>
                            <lavel className=' fs-lg-4 fw-lg-bold'>Photo: </lavel>
                            <input type='file'/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegistrationForm
