document.addEventListener('DOMContentLoaded', function() {
    // Obține elementele select pentru data și ora
    var selectDate = document.getElementById('selected-date');
    var selectTime = document.getElementById('selected-time');
  
    // Creează o funcție pentru a genera opțiunile de selectare a datei
    function generateDateOptions() {
      // Golește opțiunile existente
      selectDate.innerHTML = '';
  
      // Obține data curentă
      var currentDate = new Date();
  
      // Adaugă opțiunile pentru ziua curentă și următoarele 4 zile
      for (var i = 0; i < 5; i++) {
        var option = document.createElement('option');
        var date = new Date(currentDate.getTime() + i * 24 * 60 * 60 * 1000); // Adaugă 24 de ore pentru fiecare zi ulterioară
        var dateString = date.toLocaleDateString('ro-RO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        option.text = dateString;
        option.value = date.toISOString().split('T')[0]; // Formatează data ca string ISO
        selectDate.appendChild(option);
      }
    }
  
    // Creează o funcție pentru a genera opțiunile de selectare a orei
    function generateTimeOptions() {
      // Golește opțiunile existente
      selectTime.innerHTML = '';
  
      // Adaugă opțiunile pentru orele dintr-o zi (de la 00:00 la 23:45, cu pași de 15 minute)
      for (var hour = 0; hour < 24; hour++) {
        for (var minute = 0; minute < 60; minute += 15) {
          var option = document.createElement('option');
          var timeString = ('0' + hour).slice(-2) + ':' + ('0' + minute).slice(-2); // Formatează ora și minutul
          option.text = timeString;
          option.value = timeString;
          selectTime.appendChild(option);
        }
      }
    }
  
    // Apelează funcțiile pentru a genera opțiunile inițiale de selectare a datei și orei
    generateDateOptions();
    generateTimeOptions();
  
    // Adaugă un ascultător pentru schimbarea valorii în select pentru data
    selectDate.addEventListener('change', function() {
      var selectedDate = selectDate.value;
      console.log('Selected date:', selectedDate);
    });
  
    // Adaugă un ascultător pentru schimbarea valorii în select pentru oră
    selectTime.addEventListener('change', function() {
      var selectedTime = selectTime.value;
      console.log('Selected time:', selectedTime);
    });
  
    // Setează ora actuală ca valoare implicită pentru selectul de timp
    var currentHour = new Date().getHours();
    var currentMinute = new Date().getMinutes();
    var currentTimeString = ('0' + currentHour).slice(-2) + ':' + ('0' + currentMinute).slice(-2);
    var currentOption = new Option('Current Time: ' + currentTimeString, currentTimeString, true, true);
    selectTime.appendChild(currentOption);
  });