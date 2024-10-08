import BoxNews from "./BoxNews";
import BoxWithInfo from "./BoxWithInfo";
import ThreeBoxNews from "./ThreeBoxTemplate";

function News() {
  return (
    <>
      <div className="top-news-container">
        <BoxNews title="त्रिविका पदाधिकारीमाथि हमलाको प्रयास भयो, प्राध्यापकहरूलाई धम्कीपूर्ण फोन आयोः शिक्षामन्त्री"></BoxNews>
        <BoxWithInfo
          title="त्रिविका पदाधिकारीमाथि हमलाको प्रयास भयो, प्राध्यापकहरूलाई धम्कीपूर्ण फोन आयोः शिक्षामन्त्री"
          author="- प्रविज्ञ रेग्मी"
          imageurl="https://www.setopati.com/uploads/posts//Pravigya%20Picture1684059029.jpg"
          description="पाठ्यक्रम विकास केन्द्र, सानोठिमीमा केही दिनअघि केन्द्रका सबै पाठ्यक्रम विशेषज्ञहरूसँग छलफल गर्ने मौका पाएको थिएँ। छलफलको मुख्य अन्तरवस्तुमा मैले नेपालको पाठ्यक्रमलाई विश्वस्तरीय बनाउन सकिन्छ भन्ने तथ्य लिएँ र यसैका बौद्घिक र प्राविधिक पक्षलाई प्रस्तुतीकरणको बहसमा राखेको थिएँ। हामीले पाठ्यक्रमको माध्यमबाट शैक्षिक प्रक्रियाको चुरो समात्न सकेमा हाम्रा सामुदायिक स्कुलले उच्च शैक्षिक प्रतिफल हासिल गर्न सक्छन् र शिक्षामा परिवर्तन सम्भव हुन्छ भन्ने विचार राखेको थिएँ। त्यसैको सार संक्षेप यहाँ प्रस्तुत गरेको छु। विषय जटिल होला वा यसका कार्यान्वयनका आयाम बहुपक्षीय र चुनौतीपूर्ण होलान्, तर यो विषय अब उठान हुनुपर्छ। यथास्थितिमा असम्भव लाग्ने यो शैक्षिक यात्रामा एकदिन नेपाल नलागी हुँदैन। तसर्थ, ढिलाइ नगरी नेपालको विद्यालय पाठ्यक्रम र शिक्षणलाई विश्वस्तरीय बनाउने जमर्को हुनुपर्छ। शिक्षाको अन्तर्यमा स्वदेशी वा विदेशी शिक्षा भन्ने हुँदैन, शिक्षाको मूल मर्म मात्र हुन्छ। शिक्षाका दर्शन र प्रयोग कुनै क्षेत्र वा देश विशेषका आफ्ना हुँदैनन्; ती विश्वव्यापी हुन्छन्। साक्षरता, मौलिक चिन्तन, वृत्तिविकास, सिकाइका प्रक्रिया, विषयवस्तुको ज्ञान वा चरित्र निर्माणका तथ्यहरू सबै मानवजातिलाई समान रूपमा लागू हुन्छन्। उपर्युक्त सत्यलाई आधार मान्दा देश वा क्षेत्र विशेषका शिक्षा प्रणालीमा केवल एक आयामलाई मात्र सम्बोधन गरे पुग्छ, त्यो हो शैक्षिक सन्दर्भ। कुनै देश विशेषको संस्कृति र पहिचान, सम्प्रदाय विशेषको धर्म, भाषा, मूल्य र मान्यताले शिक्षाको सन्दर्भलाई परिभाषित गर्छन्।"
        ></BoxWithInfo>
      </div>
    </>
  );
}
export default News;
