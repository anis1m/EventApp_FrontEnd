import React, { useContext } from "react";
import "./CityNames.css";
import { Mycontext } from "./Dashboard";

function CityNames({ getVisible }) {
  const locationChange = useContext(Mycontext);
  function handleClick(e) {
    if (e.target.tagName === "LI") {
      const text = e.target.textContent;
      try {
        locationChange(text);
        getVisible(false);
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <ul className="cityNames" onClick={handleClick}>
      <li>Adilabad</li>
      <li>Anantapur</li>
      <li>Chittoor</li>
      <li>East Godavari</li>
      <li>Guntur</li>
      <li>Hyderabad</li>
      <li>Karimnagar</li>
      <li>Khammam</li>
      <li>Krishna</li>
      <li>Kurnool</li>
      <li>Mahbubnagar</li>
      <li>Medak</li>
      <li>Nalgonda</li>
      <li>Nellore</li>
      <li>Nizamabad</li>
      <li>Prakasam</li>
      <li>Rangareddi</li>
      <li>Srikakulam</li>
      <li>Visakhapatnam</li>
      <li>Vizianagaram</li>
      <li>Warangal</li>
      <li>West Godavari</li>
      <li>Y.S.R. Kadapa</li>

      <li>Anjaw</li>
      <li>Changlang</li>
      <li>East Kameng</li>
      <li>East Siang</li>
      <li>Kamle</li>
      <li>Kra Daadi</li>
      <li>Kurung Kumey</li>
      <li>Lepa-Rada</li>
      <li>Lower Dibang Valley</li>
      <li>Lower Siang</li>
      <li>Lower Subansiri</li>
      <li>Namsai</li>
      <li>Pakke Kessang</li>
      <li>Papum Pare</li>
      <li>Shi-Yomi</li>
      <li>Siang</li>
      <li>Tawang</li>
      <li>Tirap</li>
      <li>Upper Dibang Valley</li>
      <li>Upper Siang</li>
      <li>Upper Subansiri</li>
      <li>West Kameng</li>
      <li>West Siang</li>

      <li>Baksa</li>
      <li>Barpeta</li>
      <li>Biswanath</li>
      <li>Bongaigaon</li>
      <li>Cachar</li>
      <li>Charaideo</li>
      <li>Chirang</li>
      <li>Darrang</li>
      <li>Dhemaji</li>
      <li>Dhubri</li>
      <li>Dibrugarh</li>
      <li>Goalpara</li>
      <li>Golaghat</li>
      <li>Hailakandi</li>
      <li>Hojai</li>
      <li>Jorhat</li>
      <li>Kamrup</li>
      <li>Kamrup Metropolitan</li>
      <li>Karbi Anglong</li>
      <li>Karimganj</li>
      <li>Kokrajhar</li>
      <li>Lakhimpur</li>
      <li>Majuli</li>
      <li>Morigaon</li>
      <li>Nagaon</li>
      <li>Nalbari</li>
      <li>Dima Hasao</li>
      <li>Sivasagar</li>
      <li>Sonitpur</li>
      <li>South Salmara-Mankachar</li>
      <li>Tinsukia</li>
      <li>Udalguri</li>
      <li>West Karbi Anglong</li>

      <li>Nicobar</li>
      <li>North and Middle Andaman</li>
      <li>South Andaman</li>

      <li>Alappuzha</li>
      <li>Ernakulam</li>
      <li>Idukki</li>
      <li>Kannur</li>
      <li>Kasaragod</li>
      <li>Kollam</li>
      <li>Kottayam</li>
      <li>Kozhikode</li>
      <li>Malappuram</li>
      <li>Palakkad</li>
      <li>Pathanamthitta</li>
      <li>Thiruvananthapuram</li>
      <li>Thrissur</li>
      <li>Wayanad</li>

      <li>Ariyalur</li>
      <li>Chengalpattu</li>
      <li>Chennai</li>
      <li>Coimbatore</li>
      <li>Cuddalore</li>
      <li>Dharmapuri</li>
      <li>Dindigul</li>
      <li>Erode</li>
      <li>Kallakurichi</li>
      <li>Kanchipuram</li>
      <li>Kanyakumari</li>
      <li>Karur</li>
      <li>Krishnagiri</li>
      <li>Madurai</li>
      <li>Mayiladuthurai</li>
      <li>Nagapattinam</li>
      <li>Namakkal</li>
      <li>Nilgiris</li>
      <li>Perambalur</li>
      <li>Pudukkottai</li>
      <li>Ramanathapuram</li>
      <li>Ranipet</li>
      <li>Salem</li>
      <li>Sivaganga</li>
      <li>Tenkasi</li>
      <li>Thanjavur</li>
      <li>Theni</li>
      <li>Thoothukudi</li>
      <li>Tiruchirappalli</li>
      <li>Tirunelveli</li>
      <li>Tirupattur</li>
      <li>Tiruppur</li>
      <li>Tiruvallur</li>
      <li>Tiruvannamalai</li>
      <li>Tiruvarur</li>
      <li>Vellore</li>
      <li>Viluppuram</li>
      <li>Virudhunagar</li>

      <li>Bagalkot</li>
      <li>Ballari</li>
      <li>Belagavi</li>
      <li>Bengaluru Rural</li>
      <li>Bengaluru Urban</li>
      <li>Bidar</li>
      <li>Chamarajanagar</li>
      <li>Chikkaballapur</li>
      <li>Chikkamagaluru</li>
      <li>Chitradurga</li>
      <li>Dakshina Kannada</li>
      <li>Davanagere</li>
      <li>Dharwad</li>
      <li>Gadag</li>
      <li>Hassan</li>
      <li>Haveri</li>
      <li>Kalaburagi</li>
      <li>Kodagu</li>
      <li>Kolar</li>
      <li>Koppal</li>
      <li>Mandya</li>
      <li>Mysuru</li>
      <li>Raichur</li>
      <li>Ramanagara</li>
      <li>Shivamogga</li>
      <li>Udupi</li>
      <li>Uttara Kannada</li>
      <li>Vijayapura</li>
      <li>Yadgir</li>
      <li>Bhadradri Kothagudem</li>
      <li>Hyderabad</li>
      <li>Jagtial</li>
      <li>Jangaon</li>
      <li>Jayashankar Bhupalpally</li>
      <li>Jogulamba Gadwal</li>
      <li>Kamareddy</li>
      <li>Karimnagar</li>
      <li>Khammam</li>
      <li>Kumuram Bheem Asifabad</li>
      <li>Mahabubabad</li>
      <li>Mahabubnagar</li>
      <li>Mancherial</li>
      <li>Medak</li>
      <li>Medchal-Malkajgiri</li>
      <li>Mulugu</li>
      <li>Nagarkurnool</li>
      <li>Nalgonda</li>
      <li>Narayanpet</li>
      <li>Nirmal</li>
      <li>Nizamabad</li>
      <li>Peddapalli</li>
      <li>Rajanna Sircilla</li>
      <li>Ranga Reddy</li>
      <li>Sangareddy</li>
      <li>Siddipet</li>
      <li>Suryapet</li>
      <li>Vikarabad</li>
      <li>Wanaparthy</li>
      <li>Warangal Rural</li>
      <li>Warangal Urban</li>
      <li>Yadadri Bhuvanagiri</li>

      <li>Ahmednagar</li>
      <li>Akola</li>
      <li>Amravati</li>
      <li>Aurangabad</li>
      <li>Beed</li>
      <li>Bhandara</li>
      <li>Buldhana</li>
      <li>Chandrapur</li>
      <li>Dhule</li>
      <li>Gadchiroli</li>
      <li>Gondia</li>
      <li>Hingoli</li>
      <li>Jalgaon</li>
      <li>Jalna</li>
      <li>Kolhapur</li>
      <li>Latur</li>
      <li>Mumbai City</li>
      <li>Mumbai Suburban</li>
      <li>Nagpur</li>
      <li>Nanded</li>
      <li>Nandurbar</li>
      <li>Nashik</li>
      <li>Osmanabad</li>
      <li>Palghar</li>
      <li>Parbhani</li>
      <li>Pune</li>
      <li>Raigad</li>
      <li>Ratnagiri</li>
      <li>Sangli</li>
      <li>Satara</li>
      <li>Sindhudurg</li>
      <li>Solapur</li>
      <li>Thane</li>
      <li>Wardha</li>
      <li>Washim</li>
      <li>Yavatmal</li>

      <li>Agar Malwa</li>
      <li>Alirajpur</li>
      <li>Anuppur</li>
      <li>Ashoknagar</li>
      <li>Balaghat</li>
      <li>Barwani</li>
      <li>Betul</li>
      <li>Bhind</li>
      <li>Bhopal</li>
      <li>Burhanpur</li>
      <li>Chhatarpur</li>
      <li>Chhindwara</li>
      <li>Damoh</li>
      <li>Datia</li>
      <li>Dewas</li>
      <li>Dhar</li>
      <li>Dindori</li>
      <li>Guna</li>
      <li>Gwalior</li>
      <li>Harda</li>
      <li>Hoshangabad</li>
      <li>Indore</li>
      <li>Jabalpur</li>
      <li>Jhabua</li>
      <li>Katni</li>
      <li>Khandwa</li>
      <li>Khargone</li>
      <li>Mandla</li>
      <li>Mandsaur</li>
      <li>Morena</li>
      <li>Narsinghpur</li>
      <li>Neemuch</li>
      <li>Panna</li>
      <li>Raisen</li>
      <li>Rajgarh</li>
      <li>Ratlam</li>
      <li>Rewa</li>
      <li>Sagar</li>
      <li>Satna</li>
      <li>Sehore</li>
      <li>Seoni</li>
      <li>Shahdol</li>
      <li>Shajapur</li>
      <li>Sheopur</li>
      <li>Shivpuri</li>
      <li>Sidhi</li>
      <li>Singrauli</li>
      <li>Tikamgarh</li>
      <li>Ujjain</li>
      <li>Umaria</li>
      <li>Vidisha</li>

      <li>Balod</li>
      <li>Baloda Bazar</li>
      <li>Balrampur</li>
      <li>Bastar</li>
      <li>Bemetara</li>
      <li>Bijapur</li>
      <li>Bilaspur</li>
      <li>Dantewada (South Bastar)</li>
      <li>Dhamtari</li>
      <li>Durg</li>
      <li>Gariaband</li>
      <li>Gaurela-Pendra-Marwahi</li>
      <li>Janjgir-Champa</li>
      <li>Jashpur</li>
      <li>Kabirdham (Kawardha)</li>
      <li>Kanker (North Bastar)</li>
      <li>Kondagaon</li>
      <li>Korba</li>
      <li>Koriya</li>
      <li>Mahasamund</li>
      <li>Mungeli</li>
      <li>Narayanpur</li>
      <li>Raigarh</li>
      <li>Raipur</li>
      <li>Rajnandgaon</li>
      <li>Sukma</li>
      <li>Surajpur</li>
      <li>Surguja</li>

      <li>Angul</li>
      <li>Balangir</li>
      <li>Balasore</li>
      <li>Bargarh</li>
      <li>Bhadrak</li>
      <li>Boudh</li>
      <li>Cuttack</li>
      <li>Deogarh</li>
      <li>Dhenkanal</li>
      <li>Gajapati</li>
      <li>Ganjam</li>
      <li>Jagatsinghpur</li>
      <li>Jajpur</li>
      <li>Jharsuguda</li>
      <li>Kalahandi</li>
      <li>Kandhamal</li>
      <li>Kendrapara</li>
      <li>Kendujhar (Keonjhar)</li>
      <li>Khordha</li>
      <li>Koraput</li>
      <li>Malkangiri</li>
      <li>Mayurbhanj</li>
      <li>Nabarangpur</li>
      <li>Nayagarh</li>
      <li>Nuapada</li>
      <li>Puri</li>
      <li>Rayagada</li>
      <li>Sambalpur</li>
      <li>Sonepur</li>
      <li>Sundargarh</li>

      <li>Bokaro</li>
      <li>Chatra</li>
      <li>Deoghar</li>
      <li>Dhanbad</li>
      <li>Dumka</li>
      <li>East Singhbhum</li>
      <li>Garhwa</li>
      <li>Giridih</li>
      <li>Godda</li>
      <li>Gumla</li>
      <li>Hazaribagh</li>
      <li>Jamtara</li>
      <li>Khunti</li>
      <li>Koderma</li>
      <li>Latehar</li>
      <li>Lohardaga</li>
      <li>Pakur</li>
      <li>Palamu</li>
      <li>Ramgarh</li>
      <li>Ranchi</li>
      <li>Sahibganj</li>
      <li>Seraikela Kharsawan</li>
      <li>Simdega</li>
      <li>West Singhbhum</li>

      <li>Araria</li>
      <li>Arwal</li>
      <li>Aurangabad</li>
      <li>Banka</li>
      <li>Begusarai</li>
      <li>Bhagalpur</li>
      <li>Bhojpur</li>
      <li>Buxar</li>
      <li>Darbhanga</li>
      <li>East Champaran (Motihari)</li>
      <li>Gaya</li>
      <li>Gopalganj</li>
      <li>Jamui</li>
      <li>Jehanabad</li>
      <li>Kaimur (Bhabua)</li>
      <li>Katihar</li>
      <li>Khagaria</li>
      <li>Kishanganj</li>
      <li>Lakhisarai</li>
      <li>Madhepura</li>
      <li>Madhubani</li>
      <li>Munger (Monghyr)</li>
      <li>Muzaffarpur</li>
      <li>Nalanda</li>
      <li>Nawada</li>
      <li>Pashchim Champaran (Bettiah)</li>
      <li>Patna</li>
      <li>Purba Champaran (Motihari)</li>
      <li>Purnia (Purnea)</li>
      <li>Rohtas</li>
      <li>Saharsa</li>
      <li>Samastipur</li>
      <li>Saran</li>
      <li>Sheikhpura</li>
      <li>Sheohar</li>
      <li>Sitamarhi</li>
      <li>Siwan</li>
      <li>Supaul</li>
      <li>Vaishali</li>
      <li>West Champaran</li>

      <li>Agra</li>
      <li>Aligarh</li>
      <li>Allahabad (Prayagraj)</li>
      <li>Ambedkar Nagar</li>
      <li>Amethi (Raebareli)</li>
      <li>Amroha (Jyotiba Phule Nagar)</li>
      <li>Auraiya</li>
      <li>Azamgarh</li>
      <li>Baghpat</li>
      <li>Bahraich</li>
      <li>Ballia</li>
      <li>Balrampur</li>
      <li>Banda</li>
      <li>Barabanki</li>
      <li>Bareilly</li>
      <li>Basti</li>
      <li>Bhadohi</li>
      <li>Bijnor</li>
      <li>Budaun</li>
      <li>Bulandshahr</li>
      <li>Chandauli</li>
      <li>Chitrakoot</li>
      <li>Deoria</li>
      <li>Etah</li>
      <li>Etawah</li>
      <li>Farrukhabad</li>
      <li>Fatehpur</li>
      <li>Firozabad</li>
      <li>Gautam Buddha Nagar (Noida)</li>
      <li>Ghaziabad</li>
      <li>Ghazipur</li>
      <li>Gonda</li>
      <li>Gorakhpur</li>
      <li>Hamirpur</li>
      <li>Hapur</li>
      <li>Hardoi</li>
      <li>Hathras</li>
      <li>Jalaun</li>
      <li>Jaunpur</li>
      <li>Jhansi</li>
      <li>Kannauj</li>
      <li>Kanpur Dehat (Ramabai Nagar)</li>
      <li>Kanpur Nagar</li>
      <li>Kasganj</li>
      <li>Kaushambi</li>
      <li>Kushinagar (Padrauna)</li>
      <li>Lakhimpur Kheri</li>
      <li>Lalitpur</li>
      <li>Lucknow</li>
      <li>Mainpuri</li>
      <li>Mathura</li>
      <li>Mau</li>
      <li>Meerut</li>
      <li>Mirzapur</li>
      <li>Moradabad</li>
      <li>Muzaffarnagar</li>
      <li>Pilibhit</li>
      <li>Pratapgarh</li>
      <li>Raebareli</li>
      <li>Rampur</li>
      <li>Saharanpur</li>
      <li>Sambhal</li>
      <li>Sant Kabir Nagar</li>
      <li>Shahjahanpur</li>
      <li>Shamli</li>
      <li>Shrawasti</li>
      <li>Siddharthnagar</li>
      <li>Sitapur</li>
      <li>Sonbhadra</li>
      <li>Sultanpur</li>
      <li>Unnao</li>
      <li>Varanasi</li>

      <li>Almora</li>
      <li>Bageshwar</li>
      <li>Chamoli</li>
      <li>Champawat</li>
      <li>Dehradun</li>
      <li>Haridwar</li>
      <li>Nainital</li>
      <li>Pauri Garhwal</li>
      <li>Pithoragarh</li>
      <li>Rudraprayag</li>
      <li>Tehri Garhwal</li>
      <li>Udham Singh Nagar</li>
      <li>Uttarkashi</li>

      <li>Ambala</li>
      <li>Bhiwani</li>
      <li>Charkhi Dadri</li>
      <li>Faridabad</li>
      <li>Fatehabad</li>
      <li>Gurugram (Gurgaon)</li>
      <li>Hisar</li>
      <li>Jhajjar</li>
      <li>Jind</li>
      <li>Kaithal</li>
      <li>Karnal</li>
      <li>Kurukshetra</li>
      <li>Mahendragarh</li>
      <li>Nuh</li>
      <li>Palwal</li>
      <li>Panchkula</li>
      <li>Panipat</li>
      <li>Rewari</li>
      <li>Rohtak</li>
      <li>Sirsa</li>
      <li>Sonipat</li>
      <li>Yamunanagar</li>

      <li>Ajmer</li>
      <li>Alwar</li>
      <li>Banswara</li>
      <li>Baran</li>
      <li>Barmer</li>
      <li>Bharatpur</li>
      <li>Bhilwara</li>
      <li>Bikaner</li>
      <li>Bundi</li>
      <li>Chittorgarh</li>
      <li>Churu</li>
      <li>Dausa</li>
      <li>Dholpur</li>
      <li>Dungarpur</li>
      <li>Hanumangarh</li>
      <li>Jaipur</li>
      <li>Jaisalmer</li>
      <li>Jalore</li>
      <li>Jhalawar</li>
      <li>Jhunjhunu</li>
      <li>Jodhpur</li>
      <li>Karauli</li>
      <li>Kota</li>
      <li>Nagaur</li>
      <li>Pali</li>
      <li>Pratapgarh</li>
      <li>Rajsamand</li>
      <li>Sawai Madhopur</li>
      <li>Sikar</li>
      <li>Sirohi</li>
      <li>Sri Ganganagar</li>
      <li>Tonk</li>
      <li>Udaipur</li>

      <li>Ahmedabad</li>
      <li>Amreli</li>
      <li>Anand</li>
      <li>Aravalli</li>
      <li>Banaskantha</li>
      <li>Bharuch</li>
      <li>Bhavnagar</li>
      <li>Botad</li>
      <li>Chhota Udaipur</li>
      <li>Dahod</li>
      <li>Dang</li>
      <li>Devbhoomi Dwarka</li>
      <li>Gandhinagar</li>
      <li>Gir Somnath</li>
      <li>Jamnagar</li>
      <li>Junagadh</li>
      <li>Kutch</li>
      <li>Kheda</li>
      <li>Mahisagar</li>
      <li>Mehsana</li>
      <li>Morbi</li>
      <li>Narmada</li>
      <li>Navsari</li>
      <li>Panchmahal</li>
      <li>Patan</li>
      <li>Porbandar</li>
      <li>Rajkot</li>
      <li>Sabarkantha</li>
      <li>Surat</li>
      <li>Surendranagar</li>
      <li>Tapi</li>
      <li>Vadodara</li>
      <li>Valsad</li>

      <li>Amritsar</li>
      <li>Barnala</li>
      <li>Bathinda</li>
      <li>Firozpur</li>
      <li>Faridkot</li>
      <li>Fatehgarh Sahib</li>
      <li>Fazilka</li>
      <li>Gurdaspur</li>
      <li>Hoshiarpur</li>
      <li>Jalandhar</li>
      <li>Kapurthala</li>
      <li>Ludhiana</li>
      <li>Mansa</li>
      <li>Moga</li>
      <li>Muktsar</li>
      <li>Pathankot</li>
      <li>Patiala</li>
      <li>Rupnagar</li>
      <li>Sahibzada Ajit Singh Nagar (Mohali)</li>
      <li>Sangrur</li>
      <li>Shahid Bhagat Singh Nagar (Nawanshahr)</li>
      <li>Sri Muktsar Sahib</li>
      <li>Tarn Taran</li>

      <li>Bilaspur</li>
      <li>Chamba</li>
      <li>Hamirpur</li>
      <li>Kangra</li>
      <li>Kinnaur</li>
      <li>Kullu</li>
      <li>Lahaul and Spiti</li>
      <li>Mandi</li>
      <li>Shimla</li>
      <li>Sirmaur</li>
      <li>Solan</li>
      <li>Una</li>

      <li>Jammu</li>
      <li>Samba</li>
      <li>Kathua</li>
      <li>Udhampur</li>
      <li>Reasi</li>
      <li>Rajouri</li>
      <li>Poonch</li>
      <li>Doda</li>
      <li>Ramban</li>
      <li>Kishtwar</li>

      <li>Srinagar</li>
      <li>Budgam</li>
      <li>Pulwama</li>
      <li>Baramulla</li>
      <li>Bandipora</li>
      <li>Kupwara</li>
      <li>Anantnag</li>
      <li>Shopian</li>
      <li>Ganderbal</li>

      <li>Leh</li>
      <li>Kargil</li>

      <li>Alipurduar</li>
      <li>Bankura</li>
      <li>Birbhum</li>
      <li>Cooch Behar</li>
      <li>Dakshin Dinajpur (South Dinajpur)</li>
      <li>Darjeeling</li>
      <li>Hooghly</li>
      <li>Howrah</li>
      <li>Jalpaiguri</li>
      <li>Jhargram</li>
      <li>Kalimpong</li>
      <li>Kolkata (Calcutta)</li>
      <li>Maldah (Malda)</li>
      <li>Murshidabad</li>
      <li>Nadia</li>
      <li>North 24 Parganas</li>
      <li>Paschim Medinipur (West Medinipur)</li>
      <li>Purba Medinipur (East Medinipur)</li>
      <li>Purulia</li>
      <li>South 24 Parganas</li>
      <li>Uttar Dinajpur (North Dinajpur)</li>

      <li>East Sikkim</li>
      <li>North Sikkim</li>
      <li>South Sikkim</li>
      <li>West Sikkim</li>

      <li>Dimapur</li>
      <li>Kiphire</li>
      <li>Kohima</li>
      <li>Longleng</li>
      <li>Mokokchung</li>
      <li>Mon</li>
      <li>Peren</li>
      <li>Phek</li>
      <li>Tuensang</li>
      <li>Wokha</li>
      <li>Zunheboto</li>

      <li>Bishnupur</li>
      <li>Chandel</li>
      <li>Churachandpur</li>
      <li>Imphal East</li>
      <li>Imphal West</li>
      <li>Jiribam</li>
      <li>Kakching</li>
      <li>Kamjong</li>
      <li>Kangpokpi</li>
      <li>Noney</li>
      <li>Pherzawl</li>
      <li>Senapati</li>
      <li>Tamenglong</li>
      <li>Tengnoupal</li>
      <li>Thoubal</li>
      <li>Ukhrul</li>

      <li>Aizawl</li>
      <li>Champhai</li>
      <li>Hnahthial</li>
      <li>Kolasib</li>
      <li>Lawngtlai</li>
      <li>Lunglei</li>
      <li>Mamit</li>
      <li>Saiha</li>
      <li>Saitual</li>
      <li>Serchhip</li>

      <li>Dhalai</li>
      <li>Gomati</li>
      <li>Khowai</li>
      <li>North Tripura</li>
      <li>Sepahijala</li>
      <li>South Tripura</li>
      <li>Unakoti</li>
      <li>West Tripura</li>

      <li>East Garo Hills</li>
      <li>East Jaintia Hills</li>
      <li>East Khasi Hills</li>
      <li>North Garo Hills</li>
      <li>Ri Bhoi</li>
      <li>South Garo Hills</li>
      <li>South West Garo Hills</li>
      <li>South West Khasi Hills</li>
      <li>West Garo Hills</li>
      <li>West Jaintia Hills</li>
      <li>West Khasi Hills</li>
      <li>Chandigarh</li>
      <li>Dadra and Nagar Haveli and Daman and Diu</li>
      <li>Daman and Diu</li>
      <li>Dadra and Nagar Haveli</li>
      <li>Delhi (National Capital Territory of Delhi)</li>
      <li>Lakshadweep</li>
      <li>Puducherry</li>
    </ul>
  );
}

export default CityNames;
