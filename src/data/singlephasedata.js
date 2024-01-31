import React from 'react'
import dummyproductimage from '/images/products/dummyproduct.png'
import nemaB42B48 from '/images/products/nema-b42-b48.png'
import havacMotor from '/images/products/hvac-motor.png'
import nema56FrameMotor from '/images/products/nema-56-frame.png'
import HundredS from '/images/products/100S.png'
import HundredSWood from '/images/products/100sWood.png'
import CIBody from '/images/products/CIBody.png'
import ExplosionProof from '/images/products/ExplosionProof.png'
import IEC from '/images/products/IEC.png'
import sheetal from '/images/products/sheetal.png'
import riceHuller from '/images/products/riceHuller.png'
import coolerMotor from '/images/products/cooler-motor.png'
import flange from '/images/products/flange.png'

export const data = [
    {
      id: 1,
      title: 'NEMA B42/B48 Frame Motors',
      image: nemaB42B48,
      description: 'General Purpose FHP (Fractional Horse Power) and Air Handling application motors are offered in NEMA B42/B48 Frame. These motors are designed for high efficiency and reliability, considering the global customer requirements. Motors are offered with different mounting arrangements ( Lug, Bracket, Stud, End-Shield Pad, Resilient Ring, Resilient Base) with open or closed enclosures. Thermal protection is optional and provided against requirement. ',
      applications: 'Juicer, Bench Drilling Machine, Ice Cream Vending Machine, Wet Grinder, Winnowing Fan...',
      range: '75 W to 370 W 2,4 & 6 Pole',
      standard: 'IS, NEMA',
      features: [
        'Powder coated rolled sheet metal body for corrosion resistance.',
        'DP/ TE(AOM) enclosure with improved ventilation',
        'Capacitor Start Capacitor Run continuous duty designs available',
        'Special Design for customized applications',
        'Compact design.',
        'Reversible Direction of rotation (on request)',
        'Thermal protection available (on request)'
      ],
      technicalspecs: {
        output_power: ['75 W to 370 W'],
        phase: 'Single',
        polarity: ['4'],
        supply_voltage: '115,230',
        frequency: ['50-60'],
        construction: ['Open', 'Drip Proof Fan Cooled', 'Totally Enclosed'],
        bearings : 'Sealed Ball Brg.',
        duty_cycle: 'Cont.',
        circuit_protection: 'Available',
        frame: '100, Custom'

      },
      quality: '',
      application: '',
      download_iso: '',
    },
    {
        id: 2,
        title: 'HVAC Motors',
        image: havacMotor,
        description: 'Air handling is the major area where highly reliable and efficient motors are required. CG has got a variety of motors in different electrical starting arrangements and constructions to suit customer requirements. These are basically in rolled steel powder coated body with Permanent Split Capacitor (PSC) or 3 Phase types. Thermal protection is optional and provided against requirement.',
        applications: 'Air Curtain, Chiller Unit, Condenser Unit, Exhaust Fan, Fan Coil Unit, Blowers, etc',
        range: '35 W to 750 W 2 & 4 Pole / 35 W to 550 W 6 Pole',
        standard: 'IS, NEMA, OTHER',
        features: [
          'MS Rolled Frame-Compact Design',
          'Energy Efficient continuous duty',
          'Totally Enclosed Construction',
          'Powder Coated body',
          'Compact design.',
          'Sealed Ball Bearings with High Quality Grease for longer life',
          'Low noise levels'
        ],
        technicalspecs: {
          output_power: 
            ["35W TO 750W" , "35W TO 370W"]
          ,
          phase: 'Single',
          polarity: ["2 or 4" , "6 or 8"],
          supply_voltage: '115,230',
          frequency: ['50-60'],
          construction: ['Open', 'Drip Proof Fan Cooled', 'Totally Enclosed'],
          bearings : 'Sleeve Or Sealed Ball Brg.',
          duty_cycle: 'Cont.',
          circuit_protection: 'Optional- Auto or Manual Reset',
          frame: 'Optional- NEMA 42,48, Custom'
  
        },
        quality: '',
        application: '',
        download_iso: '',
      },

      {
        id: 3,
        title: 'NEMA 56 Frame Motors',
        image: nema56FrameMotor,
        description: 'B56 frame motors are for general purpose applications in MS Rolled powder coated body construction. These are available in NEMA 56 or IEC(Metric) 90 frame, foot and flange mounting arrangements. Thermal protection is optional. UL approved range of motors is also available.',
        applications: 'Wet Grinder, Surgical Pump, Paint Mixer, Vacuum Pump, Needle Vibrator, Lawn Mower, etc',
        range: '187 W to 1500 W 4 Pole / 187 W to 2250 W 2 Pole / 187 W to 750 W 6 Pole / 187 W to 750 W 8 Pole	',
        standard: 'IEC, IS, NEMA, OTHER',
        features: [
          'Compact and reliable designs suited for various applications',
          'Powder coated rolled sheet metal body for corrosion resistance',
          'TE, TEFC, DP and DPFC enclosures available',
          'Foot, flange, face as per IEC & NEMA standard available',
          'Customized mounting arrangements on request',
          'Highly reliable switching mechanism',
          'B class and F class insulation designs available',
          'Wide voltage designs available',
          'Energy efficient designs',
          'Sealed Ball Bearings'
        ],
        technicalspecs: {
          output_power: 
            ["187 W to 2250W" , "187 W to 1500 W"	, "187 W to 750 W"]
          ,
          phase: 'Single',
          polarity: ["2" , "4" ,  "6 or 8"],
          supply_voltage: '115,230',
          frequency: ["50,60","50,60","50,60"],
          construction: "Open,Drip Proof Fan Cooled, Totally Enclosed Fan cooled, Totally Enclosed",
          bearings : 'Sealed Ball Brg.',
          duty_cycle: 'Cont.',
          circuit_protection: 'Optional- Auto or Manual Reset',
          frame: 'Optional- B56, IEC 90 or Custom'
  
        },
        quality: '',
        application: '',
        download_iso: '',
      },
      {
        id: 4,
        title: '100S Frame Motors',
        image: HundredS,
        description: 'Heavy duty motors with robust rolled sheet steel powder coated body occupies leading position in the market. Highly efficient double capacitor designs are suitable for almost any application.',
        applications: 'Atta Chakki, Domestic Flour Mill, Tower Hoist, Air Compressor, Thresher, Etc',
        range: '1100 W to 2200 W 4 Pole / 750 W 6 Pole',
        standard: 'IS',
        features: [
          'Sturdy & compact design.',
          'High starting torque CSCR designs for industrial & agricultural use',
          'Totally enclosed fan cooled designs',
          'Locked rotor protection provided',
          'ISI mark available in selected models',
          'Wide voltage designs available',
          'Highly reliable switching mechanism',
          'Sealed ball bearings.',
          'Energy efficient.',
          'Continuous duty designs',
          'Easy reversibility'
        ],
        technicalspecs: {
          output_power: 
            ["1100 W  to 2250 W"] ,
          phase: 'Single',
          polarity: ["4"],
          supply_voltage: '115,230',
          frequency: ["50,60"],
          construction: "Drip Proof Fan Cooled, Totally Enclosed Fan cooled, Totally Enclosed",
          bearings : 'Sealed Ball Brg.',
          duty_cycle: 'Cont.',
          circuit_protection: 'Available',
          frame: '100, Custom'
  
        },
        quality: '',
        application: '',
        download_iso: '',
      },
      {
        id: 5,
        title: '100S Frame Wood Working Motors',
        image: HundredSWood,
        description: 'In Wood work (Planning, Cutting, Sizing) is most common application where reliable motors are required to give uninterrupted service. The special high torque design with double capacitor is specific to this application and is the preferred choice of customers. Protection is most important aspect, which is fulfilled with the help of MCB in a special terminal box. When there is undesirable overload on motor due to wet or hard knots of the wood, the MCB operates and prevents winding failure.',
        applications: 'Wood Planer, Cutters, Sizers & Other Wood working machinery',
        range: '1500 W to 2250 W 4 Pole',
        standard: 'IS',
        
        technicalspecs: {
          output_power: 
            ["  1500 W to 2250 W"] ,
          phase: 'Single',
          polarity: ["4"],
          supply_voltage: '230',
          frequency: ["50"],
          construction: "Totally Enclosed, Fan  Cooled",
          bearings : 'Sealed Ball Brg.',
          duty_cycle: 'Cont.',
          circuit_protection: 'MCB',
          frame: '100, Custom'
  
        },
        quality: 'IMAGE',
        download_iso: 'DOWNLOAD BUTTON',
      },
      {
        id: 6,
        title: 'CI Body Motors',
        image: CIBody,
        description: 'Cast Iron Frame Motors are most popular general purpose motors in India. The robust, highly reliable designs drive every application in rural India. Expertise built over a span of 45 years in Cast Iron motors makes these motors run for years without any trouble. These are offered in IEC (Metric) 80 to 160 Frame from 370 to 5500 watts in Totally Enclosed Fan Cooled Construction. Flange mounted designs are also available.',
        applications: 'Coupled Pump, Pulveriser, Rice Huller, Garage Compressor, Thresher, Floor Polisher...',
        range: '750 W to 5500 W 4 Pole',
        standard: 'IS',
        features: [
          'Heavy duty designs with Reliable OC Switch & Gear',
          'Wide voltage suitability',
          'Rugged construction',
          'Lower Temperature Rise',
          'Sealed Ball Bearings',
          'Dynamically balanced rotors',
          'Long life & high performance Motors',
          'Higher power factor.'
        ],
        technicalspecs: {
          output_power: 
            ["750 W to 5500 W"] ,
          phase: 'Single',
          polarity: ["4"],
          supply_voltage: '220',
          frequency: ["50,60"],
          construction: "Totally Enclosed Fan Cooled",
          bearings : 'Sealed Ball Brg.',
          duty_cycle: 'Cont.',
          circuit_protection: 'Optional -  Manual Reset',
          frame: 'IEC 80-160'
  
        },
        quality: '',
        application: '',
        download_iso: '',
      },
      {
        id: 7,
        title: 'Explosion Proof Motors',
        image: ExplosionProof,
        description: "These motors are exclusively designed for safety against accidental Ignition or Explosions and for continuos flawless operation in explosive or inflammable atmosphere that prevails in petrol and diesel dispensing pumps, chemical factories, petrochemical industries, fertilizer and solvent extraction plants, refineries, liquor bottling plants and paints & varnish works etc. CG's Explosion proof motors are robust, highly reliable and efficient with ATEX , Bureau of Indian Standards (BIS) , (CCOE) Chief Controller of Explosives and (CMRI) Central Mining Research Institute approvals.",
        applications: 'Fuel Dispenser',
        range: '370 W to 750 W 4 Pole / 370 W to 1100 W 2 Pole',
        standard: 'IEC, IS',
        technicalspecs: {
          output_power: 
            ["370 W to 750 W"] ,
          phase: 'Single',
          polarity: ["2 or 4"],
          supply_voltage: ' 115,220',
          frequency: ["50,60"],
          construction: "Totally Enclosed Fan Cooled",
          bearings : 'Sealed Ball Brg.',
          duty_cycle: 'Cont.',
          circuit_protection: '  Auto Reset Thermatrip',
          frame: 'Custom'
  
        },
        quality: '',
        application: '',
        download_iso: '',
      },
      {
        id: 8,
        title: 'IEC Frame - Al Diecast Body Motors ELiTE Series',
        image: IEC,
        description: "CG offers IEC metric Frame single phase motors in aluminium diecast body construction. These motors cater to the needs of the global customer for light weight and efficient motors with improved ventilation. These motors are available in IP44 & IP55 enclosures.",
        applications: 'Exhaust Fans, Air Curtains, Bench Drilling M/c, Hydraulic Pumps, Paint Mixing M/c, Dryers',
        range: '187 W to 2200 W 2 Pole & 4 Pole',
        standard: 'IEC, IS',
        features: [
          'Aesthetically superior designs',
          'Light weight',
          'IP44 & IP55 enclosures available',
          'Flexible foot Mounting',
          'B5 & B14 designs available',
          'Aluminium Finned Body with improved ventilation',
          'Integrated Capacitor cover on selected models.'
        ],
        technicalspecs: {
          output_power: 
            ["187 W to 2200 W"] ,
          phase: 'Single',
          polarity: ["2 or 4"],
          supply_voltage: ' 115,230',
          frequency: ["50,60"],
          construction: "Totally Enclosed Fan Cooled",
          bearings : 'Sealed Ball Brg.',
          duty_cycle: 'Continuous',
          circuit_protection: 'Optional',
          frame: 'IEC63 to IEC100'
  
        },
        quality: '',
        application: '',
        download_iso: '',
      },
      {
        id: 9,
        title: 'Sheetal Series - CI Body Motors',
        image: sheetal,
        description: "On extensive research, CG has optimized the design of CI body motors for robust, rigid, light & compact construction with better electrical performance using optimisation techniques available in world class software. SHEETAL SERIES will cater to the needs of rural, sub-urban customers for cost effective CI Body motors and is available in 0.5HP - 3HP in IEC 80-112 Frames. This series has an elegant design with flexible terminal box mounting & is thermally protected.",
        applications: 'Paddy Thresher, Chaff Cutter, Sugarcane Crusher, Rice Huller, Winnowing Fan, Garage Compressor',
        range: '370 W to 2250 W 4Pole	',
        standard: 'IEC, IS',
        features: [
          'Higher torque levels',
          'Wide voltage suitability',
          'Lower temperature rises due to special body design',
          'Compact designs',
          'Sealed Ball Bearings',
          'Dynamically Balanced Rotors for lower vibrations',
          'Higher Power Factors',
          'Thermally Protected'
        ],
        technicalspecs: {
          output_power: 
            ["370 W to 2250 W"] ,
          phase: 'Single',
          polarity: ["4"],
          supply_voltage: '230',
          frequency: ["50,60"],
          construction: "Totally Enclosed Fan Cooled",
          bearings : 'Sealed Ball Brg.',
          duty_cycle: 'Continuous',
          circuit_protection: 'Available - Auto or Manual Reset',
          frame: 'IEC80 - IEC112'
  
        },
        quality: '',
        application: '',
        download_iso: '',
      },
      {
        id: 10,
        title: 'Rice Huller Motors',
        image: riceHuller,
        description: "CG has developed energy efficient motors for rice huller and mini rice mill application in line with “Make In India” strategy. Our robust customized designs have made CG the most preferred brand for this application.",
        applications: 'Rice Huller, Mini Rice Mill	',
        range: '1500 W to 2250W, 2  Pole 	',
        standard: 'IS',
        features: [
          'Range available : 2HP, 2.5HP and 3HP  2 pole(2800 rpm ) single phase',
          'ISI approval available for 3HP,2 pole motor',
          'Heavy duty 2 pole high speed motor',
          'Aesthetically superior IEC90 frame aluminium body construction for less noise and vibration',
          'Thermal protection specially provided',
          'Wide voltage designs to withstand voltage variations',
          'Cast Iron body range designs also available   ',
        ],
        technicalspecs: {
          output_power: 
            ["1500 W  to 2250 W "] ,
          phase: 'Single',
          polarity: ["2 and 4"],
          supply_voltage: '230',
          frequency: ["50"],
          construction: "Totally Enclosed Fan Cooled",
          bearings : 'Sealed Ball Brg.',
          duty_cycle: 'Continuous',
          
  
        },
        application: '',
        download_iso: '',
      },
      {
        id: 11,
        title: 'Cooler Motors',
        image: coolerMotor,
        description: 'CG is having an extensive range of cooler motor depending on the customer’s size of blades and air flow requirements. Our output ranges from 107W to 370 W with designs available in single speed as well as three speed in different mounting arrangements as per the customer’s request.',
        applications: 'Exhaust fans, Desert Coolers',
        range: '95 W to 370 W, 2, 4 and 6 Pole ',
        standard: 'IS,NEMA, Others',
        features: [
          'Powder coated sheet metal body for corrosion resistance with TE(AOM) enclosure',
          'Sealed ball bearings for longer life and durability',
          'Dynamically balanced rotors for lower noise and vibration',
          'Single speed and Three speed designs available',
          'Motors available in 110dia, 127 dia, NEMA 42,48 and 56 frame',
          'Ring and Stud mounting can be provided on request besides our standard pad mounting arrangement   ',
          'Cowl arrangement available on request',
        ],
        technicalspecs: {
          output_power: 
            ["  95 W  to 370W "]
          ,
          phase: 'Single',
          polarity: ["2, 4 and 6"],
          supply_voltage: '230',
          frequency: ["50"],
          construction: "TE(AOM)",
          bearings : 'Sealed Ball Brg.',
          duty_cycle: 'Cont.',
  
        },
        application: '',
        download_iso: '',
      },
      {
        id: 12,
        title: 'Flange Motors',
        image: flange,
        description: "CG is having a complete range of heavy duty IEC flange mounted motors suited for a wide variety of industrial applications in all three constructions i.e. Sheet metal body, Cast Iron body and Aluminium body designs ranging from 180W to 3700W.",
        applications: 'Gear boxes, Hydraulic packs, Pouch packing, Pump, Pulverizer',
        range: '80 W to  3700W, 2 pole and 4 pole 	',
        standard: 'IS',
        features: [
          'Motors available in Rolled Sheet Metal Body, Cast Iron and Aluminium Body constructions',
          'Flange and Face  mounting arrangements ranges from 63 frame to 132 frame',
          'Motors available in NEMA 48, 56, 100S frame and IEC 63 to 132 frame',
          'B14( face) mounting available as per the application requirement. B34 and B35 mounting can be provided on request',
          'Customized mounting can be provided as per the application requirement',
        ],
        technicalspecs: {
          output_power: 
            [" 180W  to 3700W "] ,
          phase: 'Single',
          polarity: ["2 and 4 pole"],
          supply_voltage: '230',
          frequency: ["50"],
          construction: "Totally Enclosed Fan Cooled",
          bearings : 'Sealed Ball Brg.',
          duty_cycle: 'Continuous',
          circuit_protection: 'Optional-Auto or Manual reset',
          frame: 'NEMA48/56, 100S, IEC 63, 71, 81, 90, 100, 112, 132 frames'
        },
        application: '',
        download_iso: '',
      },

  ]