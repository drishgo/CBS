import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllNgos } from "../../redux/Slices/ngoSlice";
import NgoItem from "./NgoItem";

export default function(){
    const { ngos, totalPages, currentPage, pending, error, error_message, success_message } = useSelector((state) => state.ngos);
    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(fetchAllNgos());
	}, []);

    return(
        <div class="our-cases-area section-padding30">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-7 col-md-10 col-sm-10">
                        <div class="section-tittle text-center mb-80">
                            <span>Our Cases you can see</span>
                            <h2>Explore our latest causes that we works </h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    {/* {ngos? ngos.map((ngoItem)=>{
								return <NgoItem key={ngoItem._id} ngo={ngoItem}/>
							})
                        : ""
                        } */}

                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-cases mb-40">
                                <div class="cases-img">
                                    <img src="assets/img/gallery/case1.png" alt="" />
                                </div>
                                <div class="cases-caption">
                                    <h3><a href="#">Ensure Education For Every Poor Children</a></h3>
                                    <div class="single-skill mb-15">
                                        <div class="bar-progress">
                                            <div id="bar1" class="barfiller">
                                                <div class="tipWrap">
                                                    <span class="tip"></span>
                                                </div>
                                                <span class="fill" data-percentage="70"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="prices d-flex justify-content-between">
                                        <p>Raised:<span> $20,000</span></p>
                                        <p>Goal:<span> $35,000</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-cases mb-40">
                                <div class="cases-img">
                                    <img src="assets/img/gallery/case3.png" alt="" />
                                </div>
                                <div class="cases-caption">
                                    <h3><a href="#">Ensure Education For Every Poor Children</a></h3>
                                    <div class="single-skill mb-15">
                                        <div class="bar-progress">
                                            <div id="bar1" class="barfiller">
                                                <div class="tipWrap">
                                                    <span class="tip"></span>
                                                </div>
                                                <span class="fill" data-percentage="70"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="prices d-flex justify-content-between">
                                        <p>Raised:<span> $20,000</span></p>
                                        <p>Goal:<span> $35,000</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="single-cases mb-40">
                                <div class="cases-img">
                                    <img src="assets/img/gallery/case2.png" alt="" />
                                </div>
                                <div class="cases-caption">
                                    <h3><a href="#">Ensure Education For Every Poor Children</a></h3>
                                    <div class="single-skill mb-15">
                                        <div class="bar-progress">
                                            <div id="bar1" class="barfiller">
                                                <div class="tipWrap">
                                                    <span class="tip"></span>
                                                </div>
                                                <span class="fill" data-percentage="70"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="prices d-flex justify-content-between">
                                        <p>Raised:<span> $20,000</span></p>
                                        <p>Goal:<span> $35,000</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-cases mb-40">
                        <div class="cases-img">
                            <img src="assets/img/gallery/case1.png" alt="" />
                        </div>
                        <div class="cases-caption">
                            <h3><a href="#">Ensure Education For Every Poor Children</a></h3>
                            
                            <div class="single-skill mb-15">
                                <div class="bar-progress">
                                    <div id="bar1" class="barfiller">
                                        <div class="tipWrap">
                                            <span class="tip"></span>
                                        </div>
                                        <span class="fill" data-percentage="70"></span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="prices d-flex justify-content-between">
                                <p>Raised:<span> $20,000</span></p>
                                <p>Goal:<span> $35,000</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-cases mb-40">
                        <div class="cases-img">
                            <img src="assets/img/gallery/case2.png" alt="" />
                        </div>
                        <div class="cases-caption">
                            <h3><a href="#">Providing Healthy Food For The Children</a></h3>
                            
                            <div class="single-skill mb-15">
                                <div class="bar-progress">
                                    <div id="bar2" class="barfiller">
                                        <div class="tipWrap">
                                            <span class="tip"></span>
                                        </div>
                                        <span class="fill" data-percentage="25"></span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="prices d-flex justify-content-between">
                                <p>Raised:<span> $20,000</span></p>
                                <p>Goal:<span> $35,000</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-cases mb-40">
                        <div class="cases-img">
                            <img src="assets/img/gallery/case3.png" alt="" />
                        </div>
                        <div class="cases-caption">
                            <h3><a href="#">Supply Drinking Water For  The People</a></h3>
                            
                            <div class="single-skill mb-15">
                                <div class="bar-progress">
                                    <div id="bar3" class="barfiller">
                                        <div class="tipWrap">
                                            <span class="tip"></span>
                                        </div>
                                        <span class="fill" data-percentage="50"></span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="prices d-flex justify-content-between">
                                <p>Raised:<span> $20,000</span></p>
                                <p>Goal:<span> $35,000</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
