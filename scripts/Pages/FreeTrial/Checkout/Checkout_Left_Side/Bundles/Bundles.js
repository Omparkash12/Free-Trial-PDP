import React, { useState, useEffect } from 'react';
import './Bundles.css';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

// Images
import desc_image_1 from '../../../../Images/Dip-desc_image_1.svg';
import desc_image_2 from '../../../../Images/Dip-product-2.svg';


const Coffee = () => {
    const [quantity, setCount] = useState(0);
    const increment = () => {
        setCount(quantity + 1);
    }
    const decrement = () => {
        if (quantity >= 1) {
            setCount(quantity - 1);
        }
    }

    const [quantity_1, setCount_1] = useState(0);
    const increment_1 = () => {
        setCount_1(quantity_1 + 1);
    }
    const decrement_1 = () => {
        if (quantity_1 >= 1) {
            setCount_1(quantity_1 - 1);
        }
    }

    const [quantity_2, setCount_2] = useState(0);
    const increment_2 = () => {
        setCount_2(quantity_2 + 1);
    }
    const decrement_2 = () => {
        if (quantity_2 >= 1) {
            setCount_2(quantity_2 - 1);
        }
    }

    const [quantity_3, setCount_3] = useState(0);
    const increment_3 = () => {
        setCount_3(quantity_3 + 1);
    }
    const decrement_3 = () => {
        if (quantity_3 >= 1) {
            setCount_3(quantity_3 - 1);
        }
    }

    const [quantity_4, setCount_4] = useState(0);
    const increment_4 = () => {
        setCount_4(quantity_4 + 1);
    }
    const decrement_4 = () => {
        if (quantity_4 >= 1) {
            setCount_4(quantity_4 - 1);
        }
    }


    useEffect(() => {

        $(function ready() {
            $('.coffee_desc').on('click', function () {
                $('.coffee_desc').removeClass('mystyle_1');
                $(this).addClass('mystyle_1');
            })

            $(window).on('load', function () {
                $(".coffee_desc.onload").addClass('mystyle_1');
            });
        })
    }, [])



    return (
        <section id='coffee_section' className='coffee_section'>
            <div className="coffee_data">
                <div className="coffee_heading">
                    <h4>Select Your Bundle</h4>
                    {/* <p>( 30 pods per pack )</p> */}
                </div>

                <div className="coffee_desc onload">
                    <div className="desc_image">
                        <img className='desc_image_1' src={desc_image_1} alt="" />
                        <img className='desc_image_2' src={desc_image_2} alt="" />
                    </div>
                    <div className="desc_data">
                        <div className="desc_data_1">
                            <div className='smallest_image'>
                                <span>Only $16per wash - Save $84</span>
                                <h4>30 Loads</h4>
                            </div>
                            <div className="product_price">
                                <p>Best Seller</p>
                                <h5>$199</h5>
                                <h6>$115</h6>
                            </div>
                        </div>

                        {/* <div className="desc_data_2 quantity_sector">
                            <button onClick={decrement} className="minus">-</button>
                            <input className='quantity' type="number" value={quantity} />
                            <button onClick={increment} className="plus">+</button>
                        </div> */}
                    </div>
                </div>

                <div className="coffee_desc">
                    <div className="desc_image">
                        <img className='desc_image_1' src={desc_image_1} alt="" />
                        <img className='desc_image_2' src={desc_image_2} alt="" />
                    </div>
                    <div className="desc_data">
                        <div className="desc_data_1">
                            <div className='smallest_image'>
                                <span>$20 per wash - Save $72</span>
                                <h4>60 Loads</h4>
                            </div>
                            <div className="product_price">
                                {/* <p>Best Seller</p> */}
                                <h5>$169</h5>
                                <h6>$97</h6>
                            </div>
                        </div>

                        {/* <div className="desc_data_2 quantity_sector">
                            <button onClick={decrement_1} className="minus">-</button>
                            <input className='quantity' type="number" value={quantity_1} />
                            <button onClick={increment_1} className="plus">+</button>
                        </div> */}
                    </div>
                </div>

                <div className="coffee_desc">
                    <div className="desc_image">
                        <img className='desc_image_1' src={desc_image_1} alt="" />
                        <img className='desc_image_2' src={desc_image_2} alt="" />
                    </div>
                    <div className="desc_data">
                        <div className="desc_data_1">
                            <div className='smallest_image'>
                                <span>$23 per wash - Save $62</span>
                                <h4>90 Loads</h4>
                            </div>
                            <div className="product_price">
                                {/* <p>Best Seller</p> */}
                                <h5>$83</h5>
                                <h6>$145</h6>
                            </div>
                        </div>
                        {/* <div className="desc_data_2 quantity_sector">
                            <button onClick={decrement_2} className="minus">-</button>
                            <input className='quantity' type="number" value={quantity_2} />
                            <button onClick={increment_2} className="plus">+</button>
                        </div> */}
                    </div>
                </div>

                <div className="coffee_desc">
                    <div className="desc_image">
                        <img className='desc_image_1' src={desc_image_1} alt="" />
                        <img className='desc_image_2' src={desc_image_2} alt="" />
                    </div>
                    <div className="desc_data">
                        <div className="desc_data_1">
                            <div className='smallest_image'>
                                <span>$23 per wash - Save $62</span>
                                <h4>120 Loads</h4>
                            </div>
                            <div className="product_price">
                                {/* <p>Best Seller</p> */}
                                <h5>$69</h5>
                                <h6>$119</h6>
                            </div>
                        </div>
                        {/* <div className="desc_data_2 quantity_sector">
                            <button onClick={decrement_3} className="minus">-</button>
                            <input className='quantity' type="number" value={quantity_3} />
                            <button onClick={increment_3} className="plus">+</button>
                        </div> */}
                    </div>
                </div>

                <div className="coffee_desc m-0">
                    <div className="desc_image">
                        <img className='desc_image_1' src={desc_image_1} alt="" />
                        <img className='desc_image_2' src={desc_image_2} alt="" />
                    </div>
                    <div className="desc_data">
                        <div className="desc_data_1">
                            <div className='smallest_image'>
                                <span>$27 per wash - Save $50</span>
                                <h4>300 Loads</h4>
                            </div>
                            <div className="product_price">
                                {/* <p>Best Seller</p> */}
                                <h5>$69</h5>
                                <h6>$119</h6>
                            </div>
                        </div>

                        {/* <div className="desc_data_2 quantity_sector">
                            <button onClick={decrement_4} className="minus">-</button>
                            <input className='quantity' type="number" value={quantity_4} />
                            <button onClick={increment_4} className="plus">+</button>
                        </div> */}
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Coffee;