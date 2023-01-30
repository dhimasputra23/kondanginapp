import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Form, Input, Modal, Select } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import { Provider } from 'react-redux';
import store from '../../store';
import { getUndangan } from '../../store/action';
const GoldTiga = () => {

    const state = useSelector((state) => state)
    const dispatch = useDispatch()


    const [modalRekening, setModalRekening] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm()
    // const [mempelaiPria, setMempelaiPria] = useState([{}])


    const displayUndangan = () => {
        dispatch(getUndangan())
    }

    useEffect(() => {
        displayUndangan()
   

    }, [])



    const showModal = (id) => {

        if (id === 1) {

            setIsModalOpen(true)
        } else {

            setModalRekening(true);
        }

    };

    const handleOk = (id) => {

        if (id === 1) {
            setIsModalOpen(false);
        } else {
            setModalRekening(false);
        }




    };

    const handleCancel = (id) => {

        if (id === 1) {
            setIsModalOpen(false);
        } else {
            setModalRekening(false);
        }



    };


    const data = []


    // state.undangan.map((undangan, index) => {
    //     return(
    //             <div key={index}>
    //                 <p>{undangan}</p>
    //             </div>
    //     )
    // })

    // if (state.undangan.data) {
        // console.log('metu kene', state.undangan);
       

    // }
  
     
    return (
        
        <>

                <div id="page-container">
                <div id="main-content">
                    <article id="post-378802" className="post-378802 page type-page status-publish hentry">
                        <div className="entry-content">
                            <div className="et-l et-l--post">
                                <div className="et_builder_inner_content et_pb_gutters3">
                                    <div id="welcome-gate" className="et_pb_section et_pb_section_0 et_animated et_pb_with_background et_section_regular">
                                        <div className="et_pb_row et_pb_row_0">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_with_border et_pb_module et_pb_text et_pb_text_0 et_animated  et_pb_text_align_center et_pb_bg_layout_dark">
                                                    <div className="et_pb_text_inner">
                                                        <h5>Dear,</h5>
                                                        <p>Nama Tamu</p>
                                                        <h2>You Are Invited!</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="et_pb_row et_pb_row_1">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_1  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_code et_pb_code_0">
                                                    <div className="et_pb_code_inner">
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_text et_pb_text_1 et_animated  et_pb_text_align_center et_pb_bg_layout_dark">
                                                    <div className="et_pb_text_inner">
                                                        <p><span>The Wedding Celebration of</span></p>
                                                      <h1>   <span>Rena &amp; Gallant</span>   </h1>
                                                    </div>
                                                </div>
                                                <div className="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_center et_pb_module ">
                                                    <a className="et_pb_button et_pb_button_0 et_pb_bg_layout_light" href="#" data-icon="">Open Invitation</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="et_pb_section et_pb_section_1 et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider">
                                        <div className="et_pb_row et_pb_row_2">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_2  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module dvmd_text_on_a_path dvmd_text_on_a_path_0 dvmd_tp_version_1_1_3">
                                                    <div className="et_pb_module_inner">
                                                        <h1>
                                                            <svg id="dvmdtpsvg" width={130} height="100%" viewBox="0 -17.5 130 17.5">
                                                                <path id="dfAhcUuCujWfPAjgxqOKtMXccdQIReZL" className="mainPath" d="M0 0 C43.333333333333 -23.333333333333 86.666666666667 -23.333333333333 130 0 " />
                                                                <path id="displayPath" d="M0.13 -0.06993 C43.376666666667 -23.310023333333 86.623333333333 -23.310023333333 129.87 -0.069929999999999 " vectorEffect="none" />
                                                                <text dy="-0.1em" dx="2px 2px 2px 2px 2px 2px 2px 2px 2px 2px 2px ">
                                                                    <textPath id="textPath" xlinkHref="#dfAhcUuCujWfPAjgxqOKtMXccdQIReZL" startOffset="50%">Our Wedding</textPath>
                                                                </text>
                                                            </svg>
                                                        </h1>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_text et_pb_text_2 et_animated  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <p><span>Rena &amp; Gallant</span></p>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_divider et_pb_divider_0 et_pb_divider_position_center et_pb_space">
                                                    <div className="et_pb_divider_internal" />
                                                </div>
                                                <div className="et_pb_module et_pb_text et_pb_text_3 et_animated  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <p>12 Agustus 2023</p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="et_pb_bottom_inside_divider et-no-transition" />
                                    </div>
                                    <div className="et_pb_section et_pb_section_2 et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider">
                                        <div className="et_pb_row et_pb_row_3">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_3  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module dipi_svg_animator dipi_svg_animator_0">
                                                    <div className="et_pb_module_inner">
                                                        <div className="dipi-svg-animator-container preloading" style={{ opacity: 0 }}>
                                                            <div className="dipi-svg-animator-inner-wrapper" data-config="{&quot;svg_id&quot;:&quot;dipi_svg_animator_0&quot;,&quot;type&quot;:&quot;oneByOne&quot;,&quot;duration&quot;:&quot;200&quot;,&quot;start&quot;:&quot;inViewport&quot;,&quot;pathTimingFunction&quot;:&quot;EASE&quot;,&quot;animTimingFunction&quot;:&quot;EASE&quot;,&quot;replay_on_click&quot;:&quot;on&quot;}">
                                                                {/* Generator: Adobe Illustrator 23.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                                <svg id="svg-dipi_svg_animator_0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.9 841.9" style={{ fill: 'none!important', enableBackground: 'new 0 0 841.9 841.9' }} xmlSpace="preserve">
                                                                    <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n.dipi_svg_animator_0 .st0 {\n                                                                            fill: none;\n                                                                        stroke: #000000;\n                                                                        stroke-width: 1.0312;\n                                                                        stroke-linecap: round;\n                                                                        stroke-linejoin: round;\n                                                                        stroke-miterlimit: 10;\n                                                    }\n                                                                    " }} />
                                                                    <g>
                                                                        <polygon fill="none" strokeWidth={10} stroke="#FFFFFF" className="st0" points="241.1,270.5 124.8,460.2 469.3,780 343.7,460.2 	" />
                                                                        <polyline fill="none" strokeWidth={10} stroke="#FFFFFF" className="st0" points="124.8,460.2 343.7,460.2 469.3,270.5 594.9,460.2 813.8,460.2 	" />
                                                                        <polygon fill="none" strokeWidth={10} stroke="#FFFFFF" className="st0" points="697.5,270.5 813.8,460.2 469.3,780 594.9,460.2 	" />
                                                                        <line className="st0" x1="241.1" y1="270.5" x2="697.5" y2="270.5" />
                                                                        <line className="st0" x1="594.9" y1="460.2" x2="343.7" y2="460.2" />
                                                                        <line className="st0" x1="469.3" y1="61.9" x2="469.3" y2="186.9" />
                                                                        <line className="st0" x1="237.7" y1="139.5" x2="319.3" y2="234.3" />
                                                                        <line className="st0" x1="697.5" y1="139.5" x2={616} y2="234.3" />
                                                                        <circle fill="none" strokeWidth={10} stroke="#FFFFFF" className="st0" cx="115.1" cy="348.8" r="12.5" />
                                                                        <circle fill="none" strokeWidth={10} stroke="#FFFFFF" className="st0" cx="73.2" cy="403.2" r="10.6" />
                                                                        <circle fill="none" strokeWidth={10} stroke="#FFFFFF" className="st0" cx="40.1" cy="457.7" r={12} />
                                                                        <circle fill="none" strokeWidth={10} stroke="#FFFFFF" className="st0" cx="107.3" cy="512.5" r={12} />
                                                                        <circle fill="none" strokeWidth={10} stroke="#FFFFFF" className="st0" cx="67.2" cy={561} r="12.2" />
                                                                        <circle fill="none" strokeWidth={10} stroke="#FFFFFF" className="st0" cx={150} cy="570.5" r={14} />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_text et_pb_text_4 et_animated  et_pb_text_align_center et_pb_bg_layout_dark">
                                                    <div className="et_pb_text_inner">
                                                        <p>“Dan di antara tanda-tanda kekuasaan Allah ialah diciptakan-Nya
                                                            untukmu pasangan hidup dari jenismu sendiri supaya kamu merasa
                                                            tentram di samping-Nya dan dijadikan-Nya rasa kasih sayang di antara
                                                            kamu. Sesungguhnya yang demikian itu menjadi bukti kekuasaan Allah
                                                            bagi kaum yang berfikir.“</p>
                                                        <p><strong>(QS. Ar- Rum 21)</strong></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="et_pb_bottom_inside_divider et-no-transition" />
                                    </div>
                                    <div className="et_pb_section et_pb_section_3 et_section_regular">
                                        <div className="et_pb_row et_pb_row_4">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_4  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_text et_pb_text_5 et_animated  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <p>We Found Love</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="et_pb_section et_pb_section_4 et_animated et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider et_pb_top_divider">
                                        <div className="et_pb_top_inside_divider et-no-transition" />
                                        <div className="et_pb_bottom_inside_divider et-no-transition" />
                                    </div>
                                    <div className="et_pb_section et_pb_section_5 et_pb_with_background et_section_regular">
                                        <div className="et_pb_row et_pb_row_5">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_5  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_text et_pb_text_6 et_animated  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <p><span>“The highest happiness on earth is the happiness of
                                                            marriage.”</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="et_pb_section et_pb_section_6 et_animated et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider et_pb_top_divider">
                                        <div className="et_pb_top_inside_divider et-no-transition" />
                                        <div className="et_pb_bottom_inside_divider et-no-transition" />
                                    </div>
                                    <div className="et_pb_section et_pb_section_7 et_pb_with_background et_section_regular">
                                        <div className="et_pb_row et_pb_row_6">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_6  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_text et_pb_text_7 et_animated  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <p>“Being someone’s first love may be great, but to be their last is
                                                            beyond perfect.”</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="et_pb_section et_pb_section_8 et_pb_with_background et_section_regular">
                                        <div className="et_pb_row et_pb_row_7">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_7  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_image et_pb_image_0 et_animated et-waypoint">
                                                    <span className="et_pb_image_wrap "><img decoding="async" width={400} height={400} src="../wp-content/uploads/2022/12/gold3-1.png" alt title="gold3 (1)" sizes="(max-width: 400px) 100vw, 400px" className="wp-image-378804" /></span>
                                                </div>
                                                <div className="et_pb_module et_pb_blurb et_pb_blurb_0 et_animated  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_light">
                                                    <div className="et_pb_blurb_content">
                                                        <div className="et_pb_blurb_container">
                                                            <h4 className="et_pb_module_header"><span>Renantha Ayu Syafira</span>
                                                            </h4>
                                                            <div className="et_pb_blurb_description">
                                                                <p>Putri dari<br />Bapak Bambang <span>Efendi</span><br />&amp;
                                                                    Ibu <span>Ellis Mulyani</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="et_pb_module et_pb_social_media_follow et_pb_social_media_follow_0 et_animated clearfix  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <li className="et_pb_social_media_follow_network_0 et_pb_social_icon et_pb_social_network_link  et-social-instagram">
                                                        <a href="https://www.instagram.com/ngantenstory/" className="icon et_pb_with_border" title="Follow on Instagram" target="_blank"><span className="et_pb_social_media_follow_network_name" aria-hidden="true">Follow</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="et_pb_row et_pb_row_8">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_8  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_image et_pb_image_1 et_animated et-waypoint">
                                                    <span className="et_pb_image_wrap "><img decoding="async" loading="lazy" width={400} height={400} src="../wp-content/uploads/2022/12/gold3-2.png" alt title="gold3 (2)" sizes="(max-width: 400px) 100vw, 400px" className="wp-image-378806" /></span>
                                                </div>
                                                <div className="et_pb_module et_pb_blurb et_pb_blurb_1 et_animated  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_light">
                                                    <div className="et_pb_blurb_content">
                                                        <div className="et_pb_blurb_container">
                                                            <h4 className="et_pb_module_header"><span>Gallant Dwi Pamungkas</span>
                                                            </h4>
                                                            <div className="et_pb_blurb_description">
                                                                <p>Putra dari<br />Bapak <span>Ade Admar</span><br />&amp; Ibu
                                                                    Ratna</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="et_pb_module et_pb_social_media_follow et_pb_social_media_follow_1 et_animated clearfix  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <li className="et_pb_social_media_follow_network_1 et_pb_social_icon et_pb_social_network_link  et-social-instagram">
                                                        <a href="https://www.instagram.com/ngantenstory/" className="icon et_pb_with_border" title="Follow on Instagram" target="_blank"><span className="et_pb_social_media_follow_network_name" aria-hidden="true">Follow</span></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="et_pb_section et_pb_section_9 et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider et_pb_top_divider">
                                        <div className="et_pb_top_inside_divider et-no-transition" />
                                        <div className="et_pb_row et_pb_row_9">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_9  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module dipi_svg_animator dipi_svg_animator_1">
                                                    <div className="et_pb_module_inner">
                                                        <div className="dipi-svg-animator-container preloading" style={{ opacity: 0 }}>
                                                            <div className="dipi-svg-animator-inner-wrapper" data-config="{&quot;svg_id&quot;:&quot;dipi_svg_animator_1&quot;,&quot;type&quot;:&quot;oneByOne&quot;,&quot;duration&quot;:&quot;200&quot;,&quot;start&quot;:&quot;inViewport&quot;,&quot;pathTimingFunction&quot;:&quot;EASE&quot;,&quot;animTimingFunction&quot;:&quot;EASE&quot;,&quot;replay_on_click&quot;:&quot;on&quot;}">
                                                                {/* Generator: Adobe Illustrator 23.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                                <svg id="svg-dipi_svg_animator_1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.9 841.9" style={{ fill: 'none!important', enableBackground: 'new 0 0 841.9 841.9' }} xmlSpace="preserve">
                                                                    <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n                                                                        .dipi_svg_animator_1 .st0 {\n                                                                            fill: none;\n                                                                        stroke: #000000;\n                                                                        stroke-width: 1.0312;\n                                                                        stroke-linecap: round;\n                                                                        stroke-linejoin: round;\n                                                                        stroke-miterlimit: 10;\n                                                    }\n\n                                                                        .dipi_svg_animator_1 .st1 {\n                                                                            fill: none;\n                                                                        stroke: #000000;\n                                                                        stroke-width: 0.774;\n                                                                        stroke-linecap: round;\n                                                                        stroke-linejoin: round;\n                                                                        stroke-miterlimit: 10;\n                                                    }\n                                                                    " }} />
                                                                    <g>
                                                                        <g>
                                                                            <g>
                                                                                <path fill="none" strokeWidth={5} stroke="#393D43" className="st0" d="M448.2,353.9c47.3,44.4,73.4,103.9,73.4,173.6c0,134.4-109.6,243.3-244.7,243.3S32.1,662,32.1,527.6
          s109.6-243.3,244.7-243.3c47.3,0,91.4,13.3,128.8,36.4" />
                                                                                <path fill="none" strokeWidth={5} stroke="#393D43" className="st0" d="M385.8,688.3c-31.1,20.9-68.6,33.1-109,33.1c-107.7,0-194.9-86.8-194.9-193.8s87.3-193.8,194.9-193.8
          c33.6,0,59.4,5.4,87,20.3" />
                                                                                <path fill="none" strokeWidth={5} stroke="#393D43" className="st0" d="M408.5,384.7c42.4,35.5,63.3,83.5,63.3,142.9c0,66.9-34.1,125.9-85.9,160.7" />
                                                                                <polygon fill="none" strokeWidth={5} stroke="#393D43" className="st0" points="277.5,282.8 320.9,208.1 234.1,208.1 			" />
                                                                            </g>
                                                                            <g>
                                                                                <path fill="none" strokeWidth={5} stroke="#393D43" className="st0" d="M378.3,688.5c-95.6-95-95.6-249.1,0-344.1s250.5-95,346.1,0s95.6,249.1,0,344.1
          c-80.8,80.3-204.1,92.8-298,37.2" />
                                                                                <path fill="none" strokeWidth={5} stroke="#393D43" className="st0" d="M426.4,725.7" />
                                                                                <path fill="none" strokeWidth={5} stroke="#393D43" className="st0" d="M419.7,659.4c-2.1-1.9-4.2-3.9-6.2-5.9c-76.1-75.7-76.1-198.4,0-274.1c76.1-75.7,199.6-75.7,275.7,0
          c76.1,75.7,76.1,198.4,0,274.1c-61.9,61.5-154.9,73-228.5,34.6" />
                                                                                <polygon fill="none" strokeWidth={5} stroke="#393D43" className="st0" points="726,343.8 809.8,321.5 748.4,260.5 			" />
                                                                            </g>
                                                                        </g>
                                                                        <g>
                                                                            <g>
                                                                                <path fill="none" strokeWidth={5} stroke="#393D43" className="st1" d="M495.8,282.9c5.5-5.5,9.9-12.1,12.9-19.4L568.1,118" />
                                                                                <path fill="none" strokeWidth={5} stroke="#393D43" className="st1" d="M514.7,254.9c0,0,34.1-63.8,109.7-43.6C624.4,211.4,582.2,274.1,514.7,254.9z" />
                                                                                <path fill="none" strokeWidth={5} stroke="#393D43" className="st1" d="M565.3,123.8c0,0,29.9-65.8,106.7-50.5C671.9,73.3,633.9,138.7,565.3,123.8z" />
                                                                                <path fill="none" strokeWidth={5} stroke="#393D43" className="st1" d="M528.3,201.6c0,0-68.6-23.8-59.9-101.2C468.4,100.4,537.2,132.4,528.3,201.6z" />
                                                                            </g>
                                                                        </g>
                                                                        <g>
                                                                            <g>
                                                                                <path fill="none" strokeWidth={5} stroke="#393D43" className="st1" d="M264.1,709.3c-0.4-7.8-2.3-15.5-5.7-22.6l-67.8-141.8" />
                                                                                <path fill="none" strokeWidth={5} stroke="#393D43" className="st1" d="M256.1,676.4c0,0-24.3-68.2,41.5-110.5C297.6,565.9,315.7,639.4,256.1,676.4z" />
                                                                                <path fill="none" strokeWidth={5} stroke="#393D43" className="st1" d="M193,550.8c0,0-28.6-66.4,34.4-112.9C227.4,437.9,250.1,510.1,193,550.8z" />
                                                                                <path fill="none" strokeWidth={5} stroke="#393D43" className="st1" d="M225.8,630.5c0,0-63.8,34.7-115.2-23.7C110.5,606.8,180.5,577.4,225.8,630.5z" />
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module dipi_dual_heading dipi_dual_heading_0 et_animated">
                                                    <div className="et_pb_module_inner">
                                                        <div className="dipi-dual-heading ">
                                                            <h2 className="dipi-dh-main">
                                                                <span className="dipi-dh-first-heading">
                                                                    <span className="dipi-dh-animation-container">
                                                                        <span className="dipi-dh-bg-container">
                                                                            Akad
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                                <span className="dipi-dh-second-heading">
                                                                    <span className="dipi-dh-animation-container">
                                                                        <span className="dipi-dh-bg-container">
                                                                            Nikah
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_text et_pb_text_8 et_animated  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <h4>Sabtu, 12 Agustus 2023</h4>
                                                        <p>10:00 s/d 11:00</p>
                                                        <h3><span>Charitas Convention Hall</span></h3>
                                                        <p><span>Jalan Sukamaju, Sukajaya, Kec. Sukarami, Kota Palembang</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="et_pb_button_module_wrapper et_pb_button_1_wrapper et_pb_button_alignment_center et_pb_module ">
                                                    <a className="et_pb_button et_pb_button_1 et_animated et_pb_bg_layout_light" href="https://goo.gl/maps/iqHMxcKh1LtdWAsq8" target="_blank" data-icon="">Lihat Lokasi</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="et_pb_row et_pb_row_10">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_10  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module dipi_svg_animator dipi_svg_animator_2">
                                                    <div className="et_pb_module_inner">
                                                        <div className="dipi-svg-animator-container preloading" style={{ opacity: 0 }}>
                                                            <div className="dipi-svg-animator-inner-wrapper" data-config="{&quot;svg_id&quot;:&quot;dipi_svg_animator_2&quot;,&quot;type&quot;:&quot;oneByOne&quot;,&quot;duration&quot;:&quot;200&quot;,&quot;start&quot;:&quot;inViewport&quot;,&quot;pathTimingFunction&quot;:&quot;EASE&quot;,&quot;animTimingFunction&quot;:&quot;EASE&quot;,&quot;replay_on_click&quot;:&quot;on&quot;}">
                                                                {/* Generator: Adobe Illustrator 23.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  */}
                                                                <svg id="svg-dipi_svg_animator_2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 841.9 841.9" style={{ fill: 'none!important', enableBackground: 'new 0 0 841.9 841.9' }} xmlSpace="preserve">
                                                                    <style type="text/css" dangerouslySetInnerHTML={{ __html: "\n                                                                        .dipi_svg_animator_2 .st0 {\n                                                                            fill: none;\n                                                                        stroke: #000000;\n                                                                        stroke-width: 1.0312;\n                                                                        stroke-linecap: round;\n                                                                        stroke-linejoin: round;\n                                                                        stroke-miterlimit: 10;\n                                                    }\n                                                                    " }} />
                                                                    <g>
                                                                        <g>
                                                                            <path fill="none" strokeWidth={5} stroke="#393D43" className="st0" d="M332.1,38.6c-0.4-0.2-1-0.5-1.3-0.7c-18-11.2-39.3-14.5-59.9-9.6c-1.5,0.4-3.1,1-4.5,1.5
            c-18.3,5.5-33.9,17-44.3,33.7c-8.2,13.3-12.2,28.2-12,43.4c0.2,5.7,0.8,11.5,2,17.1c5,20.5,17.6,38.1,35.7,49.2
            c10,6.1,20.8,9.9,31.9,11.1c0.5,0.2,1.2,0.1,1.7,0.2c2.1,0.2,4.5,0,6.7-0.7c10.2-3,16.1-13.6,13.2-23.9
            c-2.2-7.7-8.7-12.9-15.9-13.9c-0.3-0.1-0.5,0-0.6,0c-16.6-1.9-31-14-35.1-31.1c-1.6-6.8-1.3-13.4,0.3-19.7
            c3.4-13.2,13.4-24.2,27.2-28.7l2.8-0.8c11.1-2.7,22.3-0.5,31.4,5.2c4.6,3,10,3.7,15.4,2.1c11-3.2,16-14.6,13.2-24.2
            C338.6,45,336.1,41.3,332.1,38.6z" />
                                                                        </g>
                                                                        <g>
                                                                            <path fill="none" strokeWidth={5} stroke="#393D43" className="st0" d="M625.3,38.6c-0.4-0.2-1-0.5-1.3-0.7c-18-11.2-39.3-14.5-59.9-9.6c-1.5,0.4-3.1,1-4.5,1.5
            c-18.3,5.5-33.9,17-44.3,33.7c-8.2,13.3-12.2,28.2-12,43.4c0.2,5.7,0.8,11.5,2,17.1c5,20.5,17.6,38.1,35.7,49.2
            c10,6.1,20.8,9.9,31.9,11.1c0.5,0.2,1.2,0.1,1.7,0.2c2.1,0.2,4.5,0,6.7-0.7c10.2-3,16.1-13.6,13.2-23.9
            c-2.2-7.7-8.7-12.9-15.9-13.9c-0.3-0.1-0.5,0-0.6,0c-16.6-1.9-31-14-35.1-31.1c-1.6-6.8-1.3-13.4,0.3-19.7
            c3.4-13.2,13.4-24.2,27.2-28.7l2.8-0.8c11.1-2.7,22.3-0.5,31.4,5.2c4.6,3,10,3.7,15.4,2.1c11-3.2,16-14.6,13.2-24.2
            C631.8,45,629.3,41.3,625.3,38.6z" />
                                                                        </g>
                                                                        <path fill="none" strokeWidth={5} stroke="#393D43" className="st0" d="M579.3,111h76.8c9.6,0,17.4,7.8,17.4,17.4v576.1c0,9.6-7.8,17.4-17.4,17.4H77.3c-9.6,0-17.4-7.8-17.4-17.4
        V128.4c0-9.6,7.8-17.4,17.4-17.4h106.6" />
                                                                        <line className="st0" x1="288.6" y1={111} x2="475.5" y2={111} />
                                                                        <path fill="none" strokeWidth={5} stroke="#393D43" className="st0" d="M657.7,111.1L657.7,111.1l0.3,0c9.7-0.9,18,6.2,18.9,15.9l48.9,574c0.8,9.7-6.3,18-15.9,18.9l-538.3,45.9
        l-38.3,3.2c-9.7,0.8-18.1-6.3-18.9-15.9l-2.7-31.2" />
                                                                        <path fill="none" strokeWidth={5} stroke="#393D43" className="st0" d="M171.7,765.8l6.5,35.6c1.7,9.6,10.8,15.8,20.3,14.1l569.2-104.7c9.4-1.7,15.8-10.8,14-20.3L677.6,123.9
        c-1.7-9.4-10.8-15.7-20.3-14l-5.8,1.1l0-0.1" />
                                                                        <line className="st0" x1="59.9" y1={238} x2="489.3" y2={238} />
                                                                        <line className="st0" x1={586} y1={238} x2="673.5" y2={238} />
                                                                        <path fill="none" strokeWidth={5} stroke="#393D43" className="st0" d="M364.5,641.2l148.9-140.9l-1.8,0c17.7-18.9,28.7-44.1,28.7-72c0-58.3-47.3-105.6-105.6-105.6
        c-26,0-49.5,9.7-67.9,25.3c-18.4-15.6-41.9-25.3-67.9-25.3c-58.3,0-105.6,47.3-105.6,105.6c0,24.2,8.5,46.3,22.2,64.1l0,0
        L364.5,641.2" />
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module dipi_dual_heading dipi_dual_heading_1 et_animated">
                                                    <div className="et_pb_module_inner">
                                                        <div className="dipi-dual-heading ">
                                                            <h2 className="dipi-dh-main">
                                                                <span className="dipi-dh-first-heading">
                                                                    <span className="dipi-dh-animation-container">
                                                                        <span className="dipi-dh-bg-container">
                                                                            Resepsi
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                                <span className="dipi-dh-second-heading">
                                                                    <span className="dipi-dh-animation-container">
                                                                        <span className="dipi-dh-bg-container">
                                                                            Pernikahan
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_text et_pb_text_9 et_animated  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <h4>Sabtu, 12 Agustus 2023</h4>
                                                        <p>10:00 s/d 11:00</p>
                                                        <h3><span>Charitas Convention Hall</span></h3>
                                                        <p><span>Jalan Sukamaju, Sukajaya, Kec. Sukarami, Kota Palembang</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="et_pb_button_module_wrapper et_pb_button_2_wrapper et_pb_button_alignment_center et_pb_module ">
                                                    <a className="et_pb_button et_pb_button_2 et_animated et_pb_bg_layout_light" href="https://goo.gl/maps/iqHMxcKh1LtdWAsq8" target="_blank" data-icon="">Lihat Lokasi</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="et_pb_bottom_inside_divider et-no-transition" />
                                    </div>
                                    <div className="et_pb_section et_pb_section_10 et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider et_pb_top_divider">
                                        <div className="et_pb_row et_pb_row_11">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_11  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module dipi_typing_text dipi_typing_text_0">
                                                    <div className="et_pb_module_inner">
                                                        <div className="dipi-typing">
                                                            <span className="dipi-typing-text-prefix" />
                                                            <span className="dipi-typing-wrap">
                                                                <span className="dipi-typing-text" data-dipi-loop="false" data-dipi-speed="50ms" data-dipi-backspeed="100ms" data-dipi-backdelay="100ms" data-dipi-show-cursor="true" data-dipi-cursor-char=" " data-dipi-typing-strings="[&quot;Hari yang ditunggu&quot;]" data-dipi-typing-inviewport="on" data-dipi-typing-offset="75%" />
                                                            </span>
                                                            <span className="dipi-typing-text-suffix" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module dipi_countdown dipi_countdown_0 et_animated">
                                                    <div className="et_pb_module_inner">
                                                        <div className="clock block_clock" data-config="{&quot;style&quot;:&quot;block_clock&quot;,&quot;finish_countdown&quot;:&quot;continue&quot;,&quot;label_weeks&quot;:&quot;Week,Weeks&quot;,&quot;label_days&quot;:&quot;Day,Days&quot;,&quot;label_hours&quot;:&quot;Hour,Hours&quot;,&quot;label_minutes&quot;:&quot;Min,Mins&quot;,&quot;label_seconds&quot;:&quot;Sec,Secs&quot;,&quot;date&quot;:&quot;2023-05-01 00:00&quot;,&quot;show_weeks&quot;:false,&quot;show_days&quot;:true,&quot;show_hours&quot;:true,&quot;show_minutes&quot;:true,&quot;show_seconds&quot;:true,&quot;clock_label_position&quot;:&quot;below&quot;}">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="et_pb_bottom_inside_divider et-no-transition" />
                                    </div>

                                    <div className="et_pb_section et_pb_section_12 et_pb_with_background et_section_regular">
                                        <div className="et_pb_row et_pb_row_13">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_13  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_blurb et_pb_blurb_2  et_pb_text_align_left  et_pb_blurb_position_top et_pb_bg_layout_light">
                                                    <div className="et_pb_blurb_content">


                                                        <div className="et_pb_main_blurb_image"><span className="et_pb_image_wrap"><span className="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone et-pb-icon"></span></span>
                                                        </div>
                                                        <div className="et_pb_blurb_container">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id='modalku'></div>
                                                <div className="et_pb_module dipi_dual_heading dipi_dual_heading_3 et_animated">
                                                    <div className="et_pb_module_inner">
                                                        <div className="dipi-dual-heading ">
                                                            <h2 className="dipi-dh-main">
                                                                <span className="dipi-dh-first-heading">
                                                                    <span className="dipi-dh-animation-container">
                                                                        <span className="dipi-dh-bg-container">
                                                                            Amplop
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                                <span className="dipi-dh-second-heading">
                                                                    <span className="dipi-dh-animation-container">
                                                                        <span className="dipi-dh-bg-container">
                                                                            Digital
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_text et_pb_text_11 et_animated  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <p>Bagi keluarga dan sahabat yang ingin mengirimkan hadiah, silakan
                                                            mengirimkannya melalui tautan berikut:</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="et_pb_row et_pb_row_14 two-columns">
                                            <div className="et_pb_column et_pb_column_1_2 et_pb_column_14  et_pb_css_mix_blend_mode_passthrough">
                                                <div className="et_pb_with_border et_pb_module et_pb_blurb et_pb_blurb_3 et_animated et_clickable  et_pb_text_align_left  et_pb_blurb_position_top et_pb_bg_layout_light ">
                                                    <div className='et_pb_blurb_content'>
                                                        <div className='et_pb_main_blurb_image' onClick={() => showModal(1)}>
                                                            <span className="et_pb_image_wrap"><span className="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone et-pb-icon"></span></span>
                                                        </div>
                                                        <div className="et_pb_blurb_container">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="et_pb_column et_pb_column_1_2 et_pb_column_15  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_with_border et_pb_module et_pb_blurb et_pb_blurb_4 et_animated et_clickable  et_pb_text_align_left  et_pb_blurb_position_top et_pb_bg_layout_light">
                                                    <div className="et_pb_blurb_content">
                                                        <div className="et_pb_main_blurb_image" onClick={() => showModal(0)}>
                                                            <span className="et_pb_image_wrap"><span className="et-waypoint et_pb_animation_top et_pb_animation_top_tablet et_pb_animation_top_phone et-pb-icon"></span></span>
                                                        </div>
                                                        <div className="et_pb_blurb_container">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="et_pb_section et_pb_section_11 et_pb_with_background et_section_regular">
                                                <div className="et_pb_row et_pb_row_12">
                                                    <div className="et_pb_column et_pb_column_4_4 et_pb_column_12  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                        <div className="et_pb_module dipi_dual_heading dipi_dual_heading_2 et_animated">
                                                            <div className="et_pb_module_inner">
                                                                <div className="dipi-dual-heading ">
                                                                    <h2 className="dipi-dh-main">
                                                                        <span className="dipi-dh-first-heading">
                                                                            <span className="dipi-dh-animation-container">
                                                                                <span className="dipi-dh-bg-container">
                                                                                    Konfirmasi
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                        <span className="dipi-dh-second-heading">
                                                                            <span className="dipi-dh-animation-container">
                                                                                <span className="dipi-dh-bg-container">
                                                                                    Kehadiran
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="et_pb_module et_pb_text et_pb_text_10 et_animated  et_pb_text_align_center et_pb_bg_layout_light">
                                                            <div className="et_pb_text_inner">
                                                                <p>Kami tidak sabar menunggu hari pernikahan kami bersama
                                                                    Bapak/Ibu/Saudara/i, mohon konfirmasi kehadiran Bapak/Ibu/Saudara/i.
                                                                    Terima kasih.</p>
                                                            </div>
                                                        </div>
                                                        <div className="et_pb_module et_pb_code et_pb_code_1 et_animated  et_pb_text_align_left">
                                                            <div className="et_pb_code_inner">
                                                                <div className="fluentform fluentform_wrapper_1">
                                                                    <form data-form_id={1} id="fluentform_1" className="frm-fluent-form fluent_form_1 ff-el-form-top ff_form_instance_1_1 ff-form-loading" data-form_instance="ff_form_instance_1_1" method="POST"><input type="hidden" name="__fluent_form_embded_post_id" defaultValue={378802} /><input type="hidden" id="_fluentform_1_fluentformnonce" name="_fluentform_1_fluentformnonce" defaultValue="84698e41ce" /><input type="hidden" name="_wp_http_referer" defaultValue="/gold-tiga/" />
                                                                        <div className="ff-el-group">
                                                                            <div className="ff-el-input--label ff-el-is-required asterisk-right">
                                                                                <label htmlFor="ff_1_input_text">Nama Lengkap</label>
                                                                            </div>
                                                                            <div className="ff-el-input--content"><input type="text" name="input_text" defaultValue className="ff-el-form-control" data-name="input_text" id="ff_1_input_text" /></div>
                                                                        </div>
                                                                        <div className="ff-el-group  ff_list_inline">
                                                                            <div className="ff-el-input--label asterisk-right">
                                                                                <label>Kehadiran?</label>
                                                                            </div>
                                                                            <div className="ff-el-input--content">
                                                                                <div className="ff-el-form-check ff-el-form-check-"><label className="ff-el-form-check-label" htmlFor="input_radio_f73af23d0604356e2d77289aaab425c2"><input type="radio" name="input_radio" data-name="input_radio" className="ff-el-form-check-input ff-el-form-check-radio" defaultValue="Ya, saya akan hadir." id="input_radio_f73af23d0604356e2d77289aaab425c2" />
                                                                                    <span>Ya, saya akan hadir.</span></label></div>
                                                                                <div className="ff-el-form-check ff-el-form-check-"><label className="ff-el-form-check-label" htmlFor="input_radio_3c1e920d6ad4ca6301581be15a48d648"><input type="radio" name="input_radio" data-name="input_radio" className="ff-el-form-check-input ff-el-form-check-radio" defaultValue="Maaf tidak bisa." id="input_radio_3c1e920d6ad4ca6301581be15a48d648" />
                                                                                    <span>Maaf tidak bisa.</span></label></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ff-el-group ff-text-center ff_submit_btn_wrapper">
                                                                            <button type="submit" className="ff-btn ff-btn-submit ff-btn-md ff_btn_style">Kirim</button>
                                                                        </div>
                                                                    </form>
                                                                    <div id="fluentform_1_errors" className="ff-errors-in-stack ff_form_instance_1_1 ff-form-loading_errors ff_form_instance_1_1_errors">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}

                                    <div className="et_pb_section et_pb_section_15 et_section_regular">
                                        <div className="et_pb_row et_pb_row_20">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_21  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module dipi_dual_heading dipi_dual_heading_4 et_animated">
                                                    <div className="et_pb_module_inner">
                                                        <div className="dipi-dual-heading ">
                                                            <h2 className="dipi-dh-main">
                                                                <span className="dipi-dh-first-heading">
                                                                    <span className="dipi-dh-animation-container">
                                                                        <span className="dipi-dh-bg-container">
                                                                            Happy
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                                <span className="dipi-dh-second-heading">
                                                                    <span className="dipi-dh-animation-container">
                                                                        <span className="dipi-dh-bg-container">
                                                                            Moments
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="et_pb_module et_pb_code et_pb_code_2">
                                                    <div className="et_pb_code_inner">
                                                        <div className="wonderpluginaudio" id="wonderpluginaudio-432" data-audioplayerid={432} data-width={48} data-height={600} data-skin="button48" data-progressinbar="true" data-showinfo="false" data-showimage="false" data-autoplay="false" data-random="false" data-autoresize="false" data-responsive="false" data-showtracklist="false" data-tracklistscroll="true" data-showprogress="false" data-showprevnext="false" data-showloop="false" data-stopotherplayers="true" data-preloadaudio="true" data-showtracklistsearch="false" data-saveposincookie="false" data-wptracklist="false" data-removeinlinecss="true" data-showtime="false" data-showvolume="false" data-showvolumebar="true" data-showliveplayedlist="false" data-showtitleinbar="false" data-showloading="false" data-enablega="false" data-titleinbarscroll="true" data-donotinit="false" data-addinitscript="false" data-imagewidth={100} data-imageheight={100} data-loop={1} data-tracklistitem={10} data-titleinbarwidth={80} data-gatrackingid data-playbackrate={1} data-playpauseimage="playpause-48-48-1.png" data-playpauseimagewidth={48} data-playpauseimageheight={48} data-cookiehours={240} data-prevnextimage="prevnext-24-24-0.png" data-prevnextimagewidth={24} data-prevnextimageheight={24} data-volumeimage="volume-24-24-0.png" data-volumeimagewidth={24} data-volumeimageheight={24} data-liveupdateinterval={10000} data-maxplayedlist={8} data-playedlisttitle="Last Tracks Played" data-loopimage="loop-24-24-0.png" data-loopimagewidth={24} data-loopimageheight={24} data-infoformat="<div class='amazingaudioplayer-info-title'>%ARTIST% %ALBUM%</div>
                                                                    <div class='amazingaudioplayer-info-description'>%INFO%</div>" data-jsfolder="../wp-content/plugins/wonderplugin-audio/engine/" style={{ display: 'block', position: 'relative', margin: '0 auto', width: 48, height: 'auto' }}>
                                                            <ul className="amazingaudioplayer-audios" style={{ display: 'none' }}>
                                                                <li data-artist data-title="Lee Hi - Only _ Lirik Terjemahan LeeHi" data-album data-info="&quot;Lee Hi - Only _ Lirik Terjemahan LeeHi&quot;." data-image="../wp-includes/images/media/audio.png" data-duration={238}>
                                                                    <div className="amazingaudioplayer-source" data-src="../wp-content/uploads/2022/audio/Lee-Hi-Only-_-Lirik-Terjemahan-LeeHi.mp3" data-type="audio/mpeg" />
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_video et_pb_video_0">
                                                    <div className="et_pb_video_box"><iframe loading="lazy" title="The Prewedding Video of Finda & Dean" width={1080} height={608} src="https://www.youtube.com/embed/s2IaQisOsWg?feature=oembed" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="et_pb_section et_pb_section_16 et_section_regular section_has_divider et_pb_bottom_divider et_pb_top_divider">
                                        <div className="et_pb_top_inside_divider et-no-transition" />
                                        <div className="et_pb_row et_pb_row_21">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_22  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_slider et_pb_slider_0 et_pb_slider_fullwidth_off et_pb_slider_no_arrows et_pb_slider_no_pagination et_slider_auto et_slider_speed_3500 et_slider_auto_ignore_hover">
                                                    <div className="et_pb_slides">
                                                        <div className="et_pb_slide et_pb_slide_0 et_pb_bg_layout_dark et_pb_media_alignment_center et-pb-active-slide" data-slide-id="et_pb_slide_0">
                                                            <div className="et_pb_container clearfix">
                                                                <div className="et_pb_slider_container_inner">
                                                                    <div className="et_pb_slide_description">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="et_pb_slide et_pb_slide_1 et_pb_bg_layout_dark et_pb_media_alignment_center" data-slide-id="et_pb_slide_1">
                                                            <div className="et_pb_container clearfix">
                                                                <div className="et_pb_slider_container_inner">
                                                                    <div className="et_pb_slide_description">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="et_pb_slide et_pb_slide_2 et_pb_bg_layout_dark et_pb_media_alignment_center" data-slide-id="et_pb_slide_2">
                                                            <div className="et_pb_container clearfix">
                                                                <div className="et_pb_slider_container_inner">
                                                                    <div className="et_pb_slide_description">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="et_pb_slide et_pb_slide_3 et_pb_bg_layout_dark et_pb_media_alignment_center" data-slide-id="et_pb_slide_3">
                                                            <div className="et_pb_container clearfix">
                                                                <div className="et_pb_slider_container_inner">
                                                                    <div className="et_pb_slide_description">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="et_pb_slide et_pb_slide_4 et_pb_bg_layout_dark et_pb_media_alignment_center" data-slide-id="et_pb_slide_4">
                                                            <div className="et_pb_container clearfix">
                                                                <div className="et_pb_slider_container_inner">
                                                                    <div className="et_pb_slide_description">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="et_pb_slide et_pb_slide_5 et_pb_bg_layout_dark et_pb_media_alignment_center" data-slide-id="et_pb_slide_5">
                                                            <div className="et_pb_container clearfix">
                                                                <div className="et_pb_slider_container_inner">
                                                                    <div className="et_pb_slide_description">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="et_pb_slide et_pb_slide_6 et_pb_bg_layout_dark et_pb_media_alignment_center" data-slide-id="et_pb_slide_6">
                                                            <div className="et_pb_container clearfix">
                                                                <div className="et_pb_slider_container_inner">
                                                                    <div className="et_pb_slide_description">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="et_pb_slide et_pb_slide_7 et_pb_bg_layout_dark et_pb_media_alignment_center" data-slide-id="et_pb_slide_7">
                                                            <div className="et_pb_container clearfix">
                                                                <div className="et_pb_slider_container_inner">
                                                                    <div className="et_pb_slide_description">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="et_pb_slide et_pb_slide_8 et_pb_bg_layout_dark et_pb_media_alignment_center" data-slide-id="et_pb_slide_8">
                                                            <div className="et_pb_container clearfix">
                                                                <div className="et_pb_slider_container_inner">
                                                                    <div className="et_pb_slide_description">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="et_pb_slide et_pb_slide_9 et_pb_bg_layout_dark et_pb_media_alignment_center" data-slide-id="et_pb_slide_9">
                                                            <div className="et_pb_container clearfix">
                                                                <div className="et_pb_slider_container_inner">
                                                                    <div className="et_pb_slide_description">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="et_pb_slide et_pb_slide_10 et_pb_bg_layout_dark et_pb_media_alignment_center" data-slide-id="et_pb_slide_10">
                                                            <div className="et_pb_container clearfix">
                                                                <div className="et_pb_slider_container_inner">
                                                                    <div className="et_pb_slide_description">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="et_pb_slide et_pb_slide_11 et_pb_bg_layout_dark et_pb_media_alignment_center" data-slide-id="et_pb_slide_11">
                                                            <div className="et_pb_container clearfix">
                                                                <div className="et_pb_slider_container_inner">
                                                                    <div className="et_pb_slide_description">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="et_pb_slide et_pb_slide_12 et_pb_bg_layout_dark et_pb_media_alignment_center" data-slide-id="et_pb_slide_12">
                                                            <div className="et_pb_container clearfix">
                                                                <div className="et_pb_slider_container_inner">
                                                                    <div className="et_pb_slide_description">
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="et_pb_bottom_inside_divider et-no-transition" />
                                    </div>
                                    <div className="et_pb_section et_pb_section_11 et_pb_with_background et_section_regular">
                                        <div className="et_pb_row et_pb_row_12">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_12  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module dipi_dual_heading dipi_dual_heading_2 et_animated">
                                                    <div className="et_pb_module_inner">
                                                        <div className="dipi-dual-heading ">
                                                            <h2 className="dipi-dh-main">
                                                                <span className="dipi-dh-first-heading">
                                                                    <span className="dipi-dh-animation-container">
                                                                        <span className="dipi-dh-bg-container">
                                                                            Ucapan
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                                <span className="dipi-dh-second-heading">
                                                                    <span className="dipi-dh-animation-container">
                                                                        <span className="dipi-dh-bg-container">
                                                                            & Doa
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_text et_pb_text_10 et_animated  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <p>Kami tidak sabar menunggu hari pernikahan kami bersama
                                                            Bapak/Ibu/Saudara/i, mohon konfirmasi kehadiran Bapak/Ibu/Saudara/i.
                                                            Terima kasih.</p>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_code et_pb_code_1 et_animated  et_pb_text_align_left">
                                                    <div className="et_pb_code_inner">
                                                        <div className="fluentform fluentform_wrapper_1">
                                                            <div className="site-card-border-less-wrapper">
                                                                <Card hoverable title="Kirim Ucapan & Doa" bordered={false} style={{ textAlign: 'center' }}>

                                                                    <Form>

                                                                        <Form.Item
                                                                            name={['nama']}
                                                                            style={{ marginBottom: 10 }}
                                                                            rules={[{ required: true, message: 'Nama Wajib Di isi!' }]}
                                                                        >

                                                                            <Input placeholder=" Nama Anda" prefix={<UserOutlined />} />

                                                                        </Form.Item>

                                                                        <Form.Item
                                                                            name={['ucapan']}
                                                                            style={{ marginBottom: 5 }}
                                                                            rules={[{ required: true, message: 'Ucapan & Doa Wajib Di isi!' }]}
                                                                        >
                                                                            <TextArea
                                                                                showCount
                                                                                maxLength={200}
                                                                                style={{ height: 120, marginBottom: 24 }}
                                                                                onChange={() => { }}
                                                                                placeholder="Ucapan & Doa"
                                                                            />
                                                                        </Form.Item>

                                                                        <Form.Item
                                                                            name={['konfirmasi']}
                                                                            style={{ textAlign: 'left' }}
                                                                            rules={[{ required: true, message: 'Konfirmasi Wajib Di isi!' }]}
                                                                        >
                                                                            <Select style={{ width: 200 }}
                                                                                // defaultValue="lucy"
                                                                                placeholder="Konfirmasi Kehadiran"
                                                                                // style={{ width:  }}
                                                                                onChange={() => { }}
                                                                                options={[
                                                                                    { value: 'hadir', label: 'Hadir' },
                                                                                    { value: 'tidak hadir', label: 'Tidak Hadir' },

                                                                                ]}
                                                                            />
                                                                        </Form.Item>



                                                                        <div style={{ textAlign: 'right' }}>
                                                                            <Button>Kirim</Button>
                                                                        </div>

                                                                    </Form>

                                                                </Card>
                                                            </div>
                                                            {/* <form data-form_id={1} id="fluentform_1" className="frm-fluent-form fluent_form_1 ff-el-form-top ff_form_instance_1_1 ff-form-loading" data-form_instance="ff_form_instance_1_1" method="POST"><input type="hidden" name="__fluent_form_embded_post_id" defaultValue={378802} /><input type="hidden" id="_fluentform_1_fluentformnonce" name="_fluentform_1_fluentformnonce" defaultValue="84698e41ce" /><input type="hidden" name="_wp_http_referer" defaultValue="/gold-tiga/" />
                                                                        <div className="ff-el-group">
                                                                            <div className="ff-el-input--label ff-el-is-required asterisk-right">
                                                                                <label htmlFor="ff_1_input_text">Nama Lengkap</label>
                                                                            </div>
                                                                            <div className="ff-el-input--content"><input type="text" name="input_text" defaultValue className="ff-el-form-control" data-name="input_text" id="ff_1_input_text" /></div>
                                                                        </div>
                                                                        <div className="ff-el-group  ff_list_inline">
                                                                            <div className="ff-el-input--label asterisk-right">
                                                                                <label>Kehadiran?</label>
                                                                            </div>
                                                                            <div className="ff-el-input--content">
                                                                                <div className="ff-el-form-check ff-el-form-check-"><label className="ff-el-form-check-label" htmlFor="input_radio_f73af23d0604356e2d77289aaab425c2"><input type="radio" name="input_radio" data-name="input_radio" className="ff-el-form-check-input ff-el-form-check-radio" defaultValue="Ya, saya akan hadir." id="input_radio_f73af23d0604356e2d77289aaab425c2" />
                                                                                    <span>Ya, saya akan hadir.</span></label></div>
                                                                                <div className="ff-el-form-check ff-el-form-check-"><label className="ff-el-form-check-label" htmlFor="input_radio_3c1e920d6ad4ca6301581be15a48d648"><input type="radio" name="input_radio" data-name="input_radio" className="ff-el-form-check-input ff-el-form-check-radio" defaultValue="Maaf tidak bisa." id="input_radio_3c1e920d6ad4ca6301581be15a48d648" />
                                                                                    <span>Maaf tidak bisa.</span></label></div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="ff-el-group ff-text-center ff_submit_btn_wrapper">
                                                                            <button type="submit" className="ff-btn ff-btn-submit ff-btn-md ff_btn_style">Kirim</button>
                                                                        </div>
                                                                    </form> */}
                                                            <div id="fluentform_1_errors" className="ff-errors-in-stack ff_form_instance_1_1 ff-form-loading_errors ff_form_instance_1_1_errors">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="et_pb_with_border et_pb_section et_pb_section_17 et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider et_pb_top_divider">
                                        <div className="et_pb_row et_pb_row_22">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_23  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_text et_pb_text_20 et_animated  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <p>Tinggalkan pesan/doa untuk kami <a href="../wp-content/uploads/2022/12/Comment-Envelope.svg"><img decoding="async" loading="lazy" src="../wp-content/uploads/2022/12/Comment-Envelope.svg" width={32} height={29} alt className="wp-image-377673 alignnone size-medium" /></a></p>
                                                    </div>
                                                </div>
                                                <div className="et_pb_with_border et_pb_module et_pb_comments_0 lang-id et_pb_comments_module et_pb_bg_layout_light et_pb_no_avatar et_pb_no_reply_button et_pb_no_comments_count" data-icon="">
                                                    <section id="comment-wrap">
                                                        <h1 id="comments" className="page_title">16 Comments</h1>
                                                        <ol className="commentlist clearfix">
                                                            <li className="comment even thread-even depth-1 et-pb-non-builder-comment" id="li-comment-197929">
                                                                <article id="comment-197929" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Abichandra</span> <span className="comment_date">
                                                                            on January 2, 2023 at 12:40 am </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>Selamat menempuh hidup baru dengan kasihmu.
                                                                                💌💌😘 Semoga cinta kalian terus bertumbuh dan
                                                                                semakin menguat setiap harinya. ❤️❤️❤️🥰</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment odd alt thread-odd thread-alt depth-1 et-pb-non-builder-comment" id="li-comment-197913">
                                                                <article id="comment-197913" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Bamantara</span> <span className="comment_date">
                                                                            on January 2, 2023 at 12:37 am </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>Selamat menjalani hari-hari pasca pernikahan.
                                                                                Bahagia selalu wahai saudaraku. Semoga Allah
                                                                                Swt. selalu menuntunmu beserta istri dan
                                                                                anak-anak meraih Cinta-Nya.🥰🥰</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment even thread-even depth-1 et-pb-non-builder-comment" id="li-comment-197897">
                                                                <article id="comment-197897" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Banurasmi 🥰</span> <span className="comment_date">
                                                                            on January 2, 2023 at 12:35 am </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>Turut berbahagia dengan pernikahan kalian. ❤️❤️
                                                                                Semoga pernikahan sebagai tanda awal perjalanan
                                                                                cinta kalian yang sesungguhnya diridhai-Nya.🥰🥰
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment odd alt thread-odd thread-alt depth-1 et-pb-non-builder-comment" id="li-comment-197881">
                                                                <article id="comment-197881" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Cakrawala</span> <span className="comment_date">
                                                                            on January 2, 2023 at 12:33 am </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>🥰 Selamat menjalani pernikahan yang bahagia,
                                                                                sahabatku. Selamat mengemban amanah baru sebagai
                                                                                (suami/istri). Lakukan semua karena ridha
                                                                                pada-Nya.🥰</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment even thread-even depth-1 et-pb-non-builder-comment" id="li-comment-197865">
                                                                <article id="comment-197865" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Danurdara</span> <span className="comment_date">
                                                                            on January 2, 2023 at 12:30 am </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>❤️ Selamat menikah, sahabatku tersayang. Semoga
                                                                                kalian menjadi pasangan sejati sampai maut
                                                                                memisahkan, lekas dikaruniai keturunan yang
                                                                                saleh dan salehah. Aamiin. ❤️</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment odd alt thread-odd thread-alt depth-1 et-pb-non-builder-comment" id="li-comment-197849">
                                                                <article id="comment-197849" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Gantari</span> <span className="comment_date">
                                                                            on January 2, 2023 at 12:25 am </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>Selamat menikah, sahabatku tersayang. Semoga
                                                                                kalian menjadi pasangan sejati sampai maut
                                                                                memisahkan, lekas dikaruniai keturunan yang
                                                                                saleh dan salehah. Aamiin. 😘😘</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment even thread-even depth-1 et-pb-non-builder-comment" id="li-comment-197833">
                                                                <article id="comment-197833" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Herdian</span> <span className="comment_date">
                                                                            on January 2, 2023 at 12:23 am </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>Doa terbaik untuk kamu dan pasangan, semoga
                                                                                samawa ’till jannah dan membangun keluarga
                                                                                sesuai syariat Al-Qur’an dan hadis.</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment odd alt thread-odd thread-alt depth-1 et-pb-non-builder-comment" id="li-comment-197821">
                                                                <article id="comment-197821" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Indriaya</span> <span className="comment_date">
                                                                            on January 2, 2023 at 12:20 am </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>❤️ Cinta merupakan anugerah terbaik yang
                                                                                diberikan Tuhan.🥰 Cinta juga merupakan
                                                                                penghargaan besar bagi mereka yang menerima.
                                                                                Selamat menikah, jagalah anugerah tersebut
                                                                                dengan baik. ❤️</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment even thread-even depth-1 et-pb-non-builder-comment" id="li-comment-197801">
                                                                <article id="comment-197801" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Jumantara</span> <span className="comment_date">
                                                                            on January 2, 2023 at 12:13 am </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>🥰🥰 Temanku ini sudah punya gandengan, aku masih
                                                                                betah dalam kejombloan. Selamat menikah, teman.
                                                                                Aku pasti segera menyusulmu! 😘😘</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment odd alt thread-odd thread-alt depth-1 et-pb-non-builder-comment" id="li-comment-197792">
                                                                <article id="comment-197792" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Karunia</span> <span className="comment_date">
                                                                            on January 2, 2023 at 12:09 am </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>Kunci membangun hubungan pernikahan yang kuat dan
                                                                                harmonis adalah saling teguh memegang komitmen
                                                                                bersama. Selamat menikah, semoga menjadi
                                                                                pasangan yang abadi. 🥰🥰🥰</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment even thread-even depth-1 et-pb-non-builder-comment" id="li-comment-197774">
                                                                <article id="comment-197774" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Lelana</span> <span className="comment_date">
                                                                            on January 2, 2023 at 12:03 am </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>❤️ Happy wedding! ❤️<br />
                                                                                Sudah enggak ada lagi galau meratapi status
                                                                                jomblo, ya? Berbahagialah selalu, dan semoga
                                                                                segera diberkahi dengan momongan.❤️❤️❤️</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment odd alt thread-odd thread-alt depth-1 et-pb-non-builder-comment" id="li-comment-197758">
                                                                <article id="comment-197758" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Manika</span> <span className="comment_date">
                                                                            on January 2, 2023 at 12:01 am </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>🥰 Saling mendukung, saling melengkapi, dan
                                                                                saling menghargai adalah tiga hal yang
                                                                                menguatkan sebuah ikatan cinta. Jadilah pasangan
                                                                                yang berbahagia. Selamat menempuh bahtera rumah
                                                                                tangga. 🥰</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment even thread-even depth-1 et-pb-non-builder-comment" id="li-comment-197742">
                                                                <article id="comment-197742" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Nareswara</span> <span className="comment_date">
                                                                            on January 1, 2023 at 11:59 pm </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>💌 Selamat menikah Kak. Jadilah imam yang baik
                                                                                bagi istri dan anakmu nanti. Jadilah panutan
                                                                                yang baik dan suami yang dikagumi. 💌</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment odd alt thread-odd thread-alt depth-1 et-pb-non-builder-comment" id="li-comment-197726">
                                                                <article id="comment-197726" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Ningrum ❤️</span> <span className="comment_date">
                                                                            on January 1, 2023 at 11:57 pm </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>❤️ Tetanggaku yang sudah jadi teman bermain dari
                                                                                kecil, selamat menikah! Semoga bahagia dan
                                                                                dilancarkan rezekinya selalu. Jangan lupakan
                                                                                teman kecilmu ini, ya! ❤️</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment even thread-even depth-1 et-pb-non-builder-comment" id="li-comment-197706">
                                                                <article id="comment-197706" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">Pramudya 🥰</span> <span className="comment_date">
                                                                            on January 1, 2023 at 11:55 pm </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>❤️❤️ Hari perayaan pernikahanmu hanya akan
                                                                                berlangsung sesaat, tapi semoga cintamu dan
                                                                                cintanya akan tetap tumbuh. Semoga jadi pasangan
                                                                                yang sempurna, Selamat menempuh hidup baru
                                                                                sahabatku. 🥰😘</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                            <li className="comment odd alt thread-odd thread-alt depth-1 et-pb-non-builder-comment" id="li-comment-197694">
                                                                <article id="comment-197694" className="comment-body clearfix">
                                                                    <div className="comment_avatar">
                                                                    </div>
                                                                    <div className="comment_postinfo">
                                                                        <span className="fn">❤️ Raditya ❤️</span> <span className="comment_date">
                                                                            on January 1, 2023 at 11:53 pm </span>
                                                                    </div>
                                                                    <div className="comment_area">
                                                                        <div className="comment-content clearfix">
                                                                            <p>Selamat menikah, selamat menjalani kehidupan
                                                                                pernikahan.<br />
                                                                                Semoga Tuhan selalu menjaga kalian dan anak-anak
                                                                                kelak. 😘😘</p>
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>{/* #comment-## */}
                                                        </ol>
                                                    </section>
                                                </div>
                                                <div className="et_pb_module et_pb_code et_pb_code_3">
                                                    <div className="et_pb_code_inner">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="et_pb_row et_pb_row_23">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_24  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_blurb et_pb_blurb_5  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_dark">
                                                    <div className="et_pb_blurb_content">
                                                        <div className="et_pb_blurb_container">
                                                            <h4 className="et_pb_module_header"><span>Terima kasih</span></h4>
                                                            <div className="et_pb_blurb_description">
                                                                <p><span>Rena &amp; Gallant</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="et_pb_bottom_inside_divider et-no-transition" />
                                    </div>
                                    <div className="et_pb_section et_pb_section_18 et_section_regular">
                                        <div className="et_pb_row et_pb_row_24">
                                            <div className="et_pb_column et_pb_column_4_4 et_pb_column_25  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                <div className="et_pb_module et_pb_text et_pb_text_21 et_animated  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <p>Made with ♥ by</p>
                                                    </div>
                                                </div>
                                                <div className="et_pb_module et_pb_image et_pb_image_4 et_pb_image_sticky">
                                                    <a href="#"><span className="et_pb_image_wrap "><img decoding="async" loading="lazy" width={1394} height={607} src="../wp-content/uploads/2021/12/NS-Logo2.png" alt title="NS-Logo2" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) and (max-width: 1280px) 1280px, (min-width: 1281px) 1394px, 100vw" className="wp-image-324765" /></span></a>
                                                </div>
                                                <ul className="et_pb_module et_pb_social_media_follow et_pb_social_media_follow_2 clearfix  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <li className="et_pb_social_media_follow_network_2 et_pb_social_icon et_pb_social_network_link  et-social-instagram">
                                                        <a href="https://www.instagram.com/ngantenstory/" className="icon et_pb_with_border" title="Follow on Instagram" target="_blank"><span className="et_pb_social_media_follow_network_name" aria-hidden="true">Follow</span></a>
                                                    </li>
                                                </ul>
                                                <div className="et_pb_module et_pb_text et_pb_text_22 et_animated et_clickable  et_pb_text_align_center et_pb_bg_layout_light">
                                                    <div className="et_pb_text_inner">
                                                        <p>© all rights reserved by NgantenStory.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
      
            



            <Modal title="Alamat Penerima" open={isModalOpen} onOk={() => handleOk(1)} onCancel={() => handleCancel(1)} footer={null}>

                <div id="page-container">
                    <div id="main-content">
                        <article id="post-378802" className="post-378802 page type-page status-publish hentry">
                            <div className="entry-content">
                                <div className="et-l et-l--post">
                                    <div className="et_builder_inner_content et_pb_gutters3">

                                        <div id="hadiah" className="et_pb_section et_pb_section_14 popup et_section_regular">
                                            <div className="et_pb_row et_pb_row_18">
                                                <div className="et_pb_column et_pb_column_4_4 et_pb_column_19  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                    <div className="et_pb_module et_pb_text et_pb_text_17  et_pb_text_align_center et_pb_bg_layout_light">
                                                        <div className="et_pb_text_inner">
                                                            <p>Alamat Penerima</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="et_pb_with_border et_pb_row et_pb_row_19">
                                                <div className="et_pb_column et_pb_column_4_4 et_pb_column_20  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                    <div className="et_pb_module et_pb_text et_pb_text_18  et_pb_text_align_center et_pb_bg_layout_light">
                                                        <div className="et_pb_text_inner">
                                                            <h5>Nama Lengkap<br />085123456789</h5>
                                                        </div>
                                                    </div>
                                                    <div className="et_pb_module et_pb_text et_pb_text_19  et_pb_text_align_center et_pb_bg_layout_light">
                                                        <div className="et_pb_text_inner">
                                                            <p>Jl. Magelang poop – Yogyakarta KM.6,5,<br />Kutu Tegal,
                                                                Sinduadi,<br />Daerah Istimewa Yogyakarta 55284</p>
                                                        </div>
                                                    </div>
                                                    <div className="et_pb_button_module_wrapper et_pb_button_5_wrapper et_pb_button_alignment_center et_pb_module ">

                                                        <a className="et_pb_button et_pb_button_5 copy-text et_pb_bg_layout_light" onClick={() => { }} data-icon="">Copy Address</a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>




            </Modal>

            {/* Rekening */}
            <Modal title="Nomor Rekening" open={modalRekening} onOk={() => handleOk(0)} onCancel={() => handleCancel(0)} footer={null}>

                <div id="page-container">
                    <div id="main-content">
                        <article id="post-378802" className="post-378802 page type-page status-publish hentry">
                            <div className="entry-content">
                                <div className="et-l et-l--post">
                                    <div className="et_builder_inner_content et_pb_gutters3">

                                        <div id="dana" className="et_pb_section et_pb_section_13 popup et_pb_with_background et_section_regular">
                                            <div className="et_pb_row et_pb_row_15">
                                                <div className="et_pb_column et_pb_column_4_4 et_pb_column_16  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                    <div className="et_pb_module et_pb_text et_pb_text_12  et_pb_text_align_center et_pb_bg_layout_light">
                                                        <div className="et_pb_text_inner">
                                                            <p>Nomor Rekening</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="et_pb_with_border et_pb_row et_pb_row_16">
                                                <div className="et_pb_column et_pb_column_4_4 et_pb_column_17  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                    <div className="et_pb_module et_pb_image et_pb_image_2 et_pb_image_sticky">
                                                        <span className="et_pb_image_wrap "><img decoding="async" loading="lazy" width={320} height={100} src="../wp-content/uploads/2022/bank/Bank-BCA-1.png" alt title="Bank-BCA" sizes="(max-width: 320px) 100vw, 320px" className="wp-image-326502" /></span>
                                                    </div>
                                                    <div className="et_pb_module et_pb_text et_pb_text_13  et_pb_text_align_center et_pb_bg_layout_light">
                                                        <div className="et_pb_text_inner">
                                                            <h5>Nama Mempelai</h5>
                                                        </div>
                                                    </div>
                                                    <div className="et_pb_module et_pb_text et_pb_text_14  et_pb_text_align_center et_pb_bg_layout_light">
                                                        <div className="et_pb_text_inner">
                                                            <p>xxxxxxxxxx</p>
                                                        </div>
                                                    </div>
                                                    <div className="et_pb_button_module_wrapper et_pb_button_3_wrapper et_pb_button_alignment_center et_pb_module ">
                                                        <a className="et_pb_button et_pb_button_3 copy-text et_pb_bg_layout_light" onClick={() => { }} data-icon="">Copy Number</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="et_pb_with_border et_pb_row et_pb_row_17">
                                                <div className="et_pb_column et_pb_column_4_4 et_pb_column_18  et_pb_css_mix_blend_mode_passthrough et-last-child">
                                                    <div className="et_pb_module et_pb_image et_pb_image_3 et_pb_image_sticky">
                                                        <span className="et_pb_image_wrap "><img decoding="async" loading="lazy" width={320} height={116} src="../wp-content/uploads/2022/bank/Bank-Gopay.png" alt title="Bank-Gopay" sizes="(max-width: 320px) 100vw, 320px" className="wp-image-325981" /></span>
                                                    </div>
                                                    <div className="et_pb_module et_pb_text et_pb_text_15  et_pb_text_align_center et_pb_bg_layout_light">
                                                        <div className="et_pb_text_inner">
                                                            <h5>Nama Mempelai</h5>
                                                        </div>
                                                    </div>
                                                    <div className="et_pb_module et_pb_text et_pb_text_16  et_pb_text_align_center et_pb_bg_layout_light">
                                                        <div className="et_pb_text_inner">
                                                            <p>xxxxxxxxxx</p>
                                                        </div>
                                                    </div>
                                                    <div className="et_pb_button_module_wrapper et_pb_button_4_wrapper et_pb_button_alignment_center et_pb_module ">
                                                        <a className="et_pb_button et_pb_button_4 copy-text et_pb_bg_layout_light" onClick={() => { }} data-icon="">Copy Number</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>




            </Modal>


        </>
        
    )

}

export default GoldTiga

if (document.getElementById('goldtiga')) {
    ReactDOM.render(
        <Provider store={store}>
            <GoldTiga />
        </Provider>

        , document.getElementById('goldtiga'));
}