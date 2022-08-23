import React, { useEffect } from 'react';
import './ChooseType.css';
import $ from 'jquery';
import 'jquery-ui-dist/jquery-ui';

const ChooseType = (props) => {

    useEffect(() => {
        $(function ready() {
            $('.product_large_image_2').hide();
            $('.desc_image_2').hide();
            $(window).on('load', function () {
                $('.product_image_1').addClass('active_product');
            })
            $('.product_image_1').on('click', function () {
                $('.product_image_1').addClass('active_product');
                $('.product_large_image_1').show();
                $('.product_large_image_2').hide();
                $('.product_image_2').removeClass('active_product');

                $('.desc_image_2').hide();
                $('.desc_image_1').show();
            })

            $('.product_image_2').on('click', function () {
                $('.product_image_2').addClass('active_product');
                $('.product_large_image_1').hide();
                $('.product_large_image_2').show();
                $('.product_image_1').removeClass('active_product');
                $('.desc_image_2').show();
                $('.desc_image_1').hide();
            })
        })
    }, [])

    return (
        <section id='Choose_type_section' className="Choose_type_section">
            <div className="choose_type_data">
                <div className="choose_heading">
                    <h4>{props.choose_heading}</h4>
                </div>
                <div className="images_data">
                    <div className="product_image_1">
                        <img src={props.product_1} alt="" />
                        <p>Fresh Linen</p>
                    </div>

                    <div className="product_image_2">
                        <img src={props.product_2} alt="" />
                        <p>Fragrance free</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChooseType