var APP_DATA = {
  "scenes": [
    {
      "id": "0-start---overview",
      "name": "Start - Overview",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.33419093514068976,
        "pitch": 0.3430939730390641,
        "fov": 1.5163458973652966
      },
      "linkHotspots": [
        {
          "yaw": 0.1347871597796093,
          "pitch": 0.12448439602661132,
          "rotation": 3.9269908169872414,
          "target": "1-i-study-site"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2456023106113001,
          "pitch": -0.11529164298455896,
          "title": "Welcome to the 360 degree pond bathymetry study tour<br>",
          "text": "Along the red line, we explain how pond depth can be determined from aerial photo data using photogrammetry. "+
            "Use the arrows to navigate from pond to pond "+
            "or select the processing step from the list in the top left corner. <br>"+
			"Use this overview to briefly familiarise yourself with the location, with the control in the 360 images and to perceive the dimensions based on the people in the picture.<br>"
        }
      ]
    },
    {
      "id": "1-i-study-site",
      "name": "I: Study site",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.2572463549678581,
        "pitch": 0.12058416678849326,
        "fov": 1.5163458973652966
      },
      "linkHotspots": [
        {
          "yaw": 0.18125844968289684,
          "pitch": 0.11398420881337223,
          "rotation": 0.7853981633974483,
          "target": "2-ii-aerial-images-of-ponds"
        }
      ],
      "infoHotspots": [
          {
            "yaw": 0.8,
            "pitch": 0.,
            "title": "R/V Polarstern campaign PS106/PASCAL ice station<br>",
            "text": "You are now standing on an ice floe north of Svalbard in June 2017. "+
			  "Tethered to the floe with the ship, we can both measure airborne and simultaneously collect ground-truth data around and in the ponds.<br>"+
            "The study site is located in between a rafted ice zone, where deformation has caused ice to submerge. "+
            "As a result, numerous ponds of different colours have formed. They are neither visually nor geometrically different from melt ponds "+
            "and yield a perfect study site for aerial remote sensing of pond depth as shown with a spectral method in König et al. (2020)."+
            "<br>"
          }
      ]
    },
    {
      "id": "2-ii-aerial-images-of-ponds",
      "name": "II: Aerial images of ponds",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.4461972174663842,
        "pitch": 0.4612344379659792,
        "fov": 1.5163458973652966
      },
      "linkHotspots": [
        {
          "yaw": -2.754197270531101,
          "pitch": 0.09780735630160109,
          "rotation": 5.497787143782138,
          "target": "1-i-study-site"
        },
        {
          "yaw": -1.754197270531101,
          "pitch": 0.09780735630160109,
          "rotation": 5.497787143782138,
          "target": "3-iii-elevation-model"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4612221813339943,
          "pitch": 0.27363668167892996,
          "title": "Aerial images<br>",
          "text": "Aerial images were recorded with a consumer grade CANON camera (14mm lens) mounted nadir on a helicopter.<br>"+
			"The typical ground resolution is between 5 and 10cm.<br>"
        },
        {
          "yaw": 0.9463675752566179,
          "pitch": 0.19734017689626882,
          "title": "Melt ponds<br>",
          "text": "Ponds play a key role in the Arctic energy budget and ecosystem. "+
			"Vertical geometry is largely underrepresented in studies and documented only by relatively few in situ measurement points. "+
			"Remote sensing of pond bathymetry raises the possibility to better implement pond depth and its effect on albedo and meltwater distribution into simulation models.<br>"
        }
      ]
    },
    {
      "id": "3-iii-elevation-model",
      "name": "III: Elevation model",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -1.1319245578889507,
        "pitch": 0.4690544894749369,
        "fov": 1.5163458973652966
      },
      "linkHotspots": [
        {
          "yaw": 2.0264855621984683,
          "pitch": 0.6461202734836533,
          "rotation": 5.497787143782138,
          "target": "2-ii-aerial-images-of-ponds"
        },
        {
          "yaw": 1.0877900042949928,
          "pitch": 0.5841586769049485,
          "rotation": 5.497787143782138,
          "target": "4-iv-pond-detection"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7951663671280649,
          "pitch": 0.09289539394356083,
          "title": "Photogrammetric reconstruction<br>",
          "text": "A parallel flight grid provides overlap between images to realistically reconstruct the surface using photogrammetric triangulation (ideally 80% forward, 60% lateral overlap). "+
			"The full-colour images are stitched together and projected onto the surface as an orthomosaic. We use Agisoft Metashape for this processing and correct for offsets caused by the continuous ice drift."+
			"Ground control points were not available for the model, but a laid out 2x2m pattern was used in the processing to scale the surface correctly (±1%).<br>"
        }
      ]
    },
    {
      "id": "4-iv-pond-detection",
      "name": "IV: Pond detection",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 1.2158611391936311,
        "pitch": 0.47932206298426117,
        "fov": 1.5163458973652966
      },
      "linkHotspots": [
        {
          "yaw": -2.730399944322894,
          "pitch": 0.13505280368067218,
          "rotation": 0.7853981633974483,
          "target": "3-iii-elevation-model"
        },
        {
          "yaw": -1.3245932655001198,
          "pitch": 0.19817041117444134,
          "rotation": 5.497787143782138,
          "target": "5-v-pond-bathymetry"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6155934390952194,
          "pitch": 0.09212231340162802,
          "title": "Surface classification<br>",
          "text": "A surface type classification of ponds based on a Random Forest Classifier is used to detect ponds and derive pond polygons.<br>"
        },
        {
          "yaw": 0.23659150370417414,
          "pitch": 0.23354548237995942,
          "title": "Pond water level<br>",
          "text": "Framing the pond polygon outline in the elevation model yields the pond water level for each pond individually.<br><br>"+
			"<img source src='img/outline.png'></img><br>"+
			"The deviation of the pond outline in the elevation model from the retrieved averaged pond water level is mainly below ±2cm.<br>"
        }
      ]
    },
    {
      "id": "5-v-pond-bathymetry",
      "name": "V: Pond bathymetry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.469023679541106,
        "pitch": 0.5064535005116646,
        "fov": 1.5163458973652966
      },
      "linkHotspots": [
        {
          "yaw": -1.6042086912981421,
          "pitch": 0.2280597764661465,
          "rotation": 0.7853981633974483,
          "target": "4-iv-pond-detection"
        },
        {
          "yaw": -2.9316256935313803,
          "pitch": 0.1389195603123774,
          "rotation": 5.497787143782138,
          "target": "6-vi-evaluation"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6999311328498017,
          "pitch": 0.18396044679952084,
          "title": "Pond bathymetry<br>",
          "text": "Cutting edge photogrammetry tools can not only reconstruct over-water topography, "+
			"but are by now powerful enough to trace intersection points even at the bottom of clear shallow waters. "+
			"However, refraction at the water surface is not taken into account in such automated calculations and must be considered manually. "+
			"We have developed a 2-step correction method as a convenient extension to the largely automated workflow (see next box). "+
			"The pond bathymetry eventually results from the vertical distance between corrected topography of the pond bottom and previously retrieved pond water level.<br>"+
			"From this step onwards, all ponds are displayed with their depth layer, the corresponding colormap is linked further to the right."
        },
        {
          "yaw": 1.5586529486720426,
          "pitch": 0.14279890020700137,
          "title": "Colorbar",
          "text": "<img source src='img/colorbar.png'></img><br>"
        },
        {
          "yaw": 0.0,
          "pitch": 0.23250239689052066,
          "title": "Refraction correction I<br>",
          "text": "Photogrammetry relies on colinearity of intersection lines. Refraction at the air-water interface bends the beam lines and causes horizontal and vertical translation of intersection points. "+
			"We developed a two step correction method to minimize the impact on the pond depth estimation. <br>"+
			"I: Images are masked to a maximum incident angle of 40° at the ground to keep horizontal mismatch between intersection lines below ground resolution.<br>"+
			"The impact can be expressed by the relation between deviation and pond depth, we call it k. k depends on the incident angle of the different camera positions to the intersection point: <br>"+
			"<img source src='img/kappa_colinearity_correction.png'></img><br>"+
			"Keeping k below 0.028 means the horizontal deviation becomes max. 2.8cm for 1m deep ponds and remains therefore below the ground resolution.<br>"
		}
,
        {
          "yaw": 0.40531515056906535,
          "pitch": 0.23250239689052066,
          "title": "Refraction correction II<br>",
          "text": "II: Obtained pond depth is multiplied by the refractive index of water (n=1.335) to correct the vertical error:<br>"+
			"<img source src='img/refrac_error.png'></img><br>"+
			"The correction factor for pond depth rises exponential with the incident angle. Note the variant y-axis. We neglect the slow rise to 1.527 towards the maximum opening angle to keep the algorithm simple.<br>"
        }
      ]
    },
    {
      "id": "6-vi-evaluation",
      "name": "VI: Evaluation",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.10244323870400329,
        "pitch": 0.25021214608612397,
        "fov": 1.5163458973652966
      },
      "linkHotspots": [
        {
          "yaw": -0.14169750984480523,
          "pitch": 0.18354115584696196,
          "rotation": 5.497787143782138,
          "target": "5-v-pond-bathymetry"
        },
        {
          "yaw": 1.1049749167197263,
          "pitch": 0.15682661994472724,
          "rotation": 1.5707963267948966,
          "target": "7-end---overview"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7656033409708787,
          "pitch": 0.0763143667148718,
          "title": "<div>In situ measurements</div>",
          "text": "We collected in total 52 manual depth measurements (shown by the spheres) in 14 ponds on two days, one clear sky day shown here and one cloudy day with only diffuse irradiance. "+
			"The exact localization of the ground truth data is challenging. To compensate for inaccuracies, we average the data within a radius of 30cm. <br>"
        },
        {
          "yaw": 0.7200742573468517,
          "pitch": 0.05602653291901305,
          "title": "Accuracy",
          "text": "<img source src='img/Accuracy.png'></img><br>Pond bathymetry estimation compared to all in situ observations from a clear sky and a cloudy day. "+
			"Point size is proportional to pond size. The greatest relative error is found in the three tiny ponds at 10 cm. <br>"+
			"All in situ points were rather located towards the center parts of the ponds, at the edge the accuracy is probably slightly lower. "+
			"The reason is that the elevation model is an estimated and smoothed reconstruction of the ice surface in which sharp edges, "+
			"such as those that sometimes occur at the edges of ponds, are unlikely to be resolved.<br>"
        }
      ]
    },
    {
      "id": "7-end---overview",
      "name": "End - Overview",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 2.5113552567276987,
        "pitch": 0.6063601463516513,
        "fov": 1.5163458973652966
      },
      "linkHotspots": [
        {
          "yaw": 0.620629735974429,
          "pitch": 0.2564385816575978,
          "rotation": 2.356194490192345,
          "target": "6-vi-evaluation"
        },
        {
          "yaw": -2.1529326971101703,
          "pitch": 0.12814214059849505,
          "rotation": 8.63937979737193,
          "target": "1-i-study-site"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0943995492867469,
          "pitch": 0.32380517683477805,
          "title": "Colorbar",
          "text": "<img source src='img/colorbar.png'></img><br>"
        },
        {
          "yaw": -0.19871082850037602,
          "pitch": 0.09221244442795928,
          "title": "Takk for turen - thanks for the trip!<br>",
          "text": "<div>Contact niels.fuchs@uni-hamburg.de for more information.</div><div><br></div><div>Acknowledgements:</div><div><br></div>"+
			"<div>Many thanks to the wonderful open source communities behind QGIS, Blender and MarziPano, which were used to create this tour.<br></div>"+
			"<div>Furthermore, special kudos to TomDee (MELLOWMESHER studio) for the great advice on 3D processing and illumination.<br></div>"
        },
        {
          "yaw": -2.296239979216651,
          "pitch": -0.10388348329431629,
          "title": "<div>Start again?</div>",
          "text": "Good luck! ;)"
        },
        {
          "yaw": 2.092425452758481,
          "pitch": 0.27992170759887536,
          "title": "Outlook",
          "text": "Airborne remote sensing of ponds using photogrammetry yields unprecented opportunities to study the hydraulic pond system using drones, helicopters or airplanes.<br>"+
			"With regular grid surveys as flown over the MOSAiC expedition Central Observatory, the whole pond system of the floe can be resolved in four dimensions: "+
			"horizontally, vertically and with time. <br><br>"+
			"<div><img source src='img/mosaic_size.png'></img><img source src='img/mosaic_level.png'></img><img source src='img/mosaic_depth.png'></img></div>"+
			"Pond size, pond water level and pond depth recorded on the MOSAiC floe on 30 June 2020 using photogrammetry.<br><br>"+
			"For more MOSAiC data and a comparison to other methods please visit EGU21-12860 (Linhard et al.) on Friday 30 April.<br>"+
			"A publication about the study presented here is in preparation.<br>"
        },
        {
          "yaw": 3.1,
          "pitch": 0.,
          "title": "Conclusion",
          "text": "Pros:<br><br>"+
			" - high resolution and accurate pond bathymetry estimation (BIAS<1cm, RMSE=3.8cm)<br>"+
			" - estimation of the whole pond bathymetry instead of single pond depth measurements<br>"+
			" - coverage of large surfaces becomes possible to increase statistical robustness<br>"+
			" - most probably applicable from any airborne platform including drones<br>"+
			" - accuracy independend of pond color, size and irradiance conditions (with few exceptions listed below)<br><br>"+
			"Cons:<br><br>"+
			" - requires dedicated survey flight pattern<br>"+
			" - smoothed surface inaccurate towards pond edges<br>"+
			" - very small ponds (approx. <10x ground resolution) cannot be resolved<br>"+
			" - pond bottom needs to be detectable<br>"+
			" - transparent pond surface required without sun glint"
        }
      ]
    }
  ],
  "name": "Melt pond bathymetry",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
