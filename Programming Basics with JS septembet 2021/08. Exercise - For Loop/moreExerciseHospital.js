function hospital(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    
    let doctor = 7;
    let reviewedPatients = 0;
    let unchekedPatients = 0;

    for(let i = 1; i < days; i++){
        let patients = Number(input[index])
        index++;
        
        if (i % 3 === 0 && unchekedPatients > doctor){
            doctor+=1;
        }

        if(patients >= doctor){
            unchekedPatients += (patients - doctor);
            reviewedPatients += (patients - unchekedPatients);
        }else if(patients <= doctor){
            reviewedPatients += (doctor - patients);
            unchekedPatients += (patients - reviewedPatients);
        }
        
    }
    reviewedPatients += unchekedPatients
    

    console.log(`Treated patients: ${reviewedPatients}.`);
    console.log(`Untreated patients: ${unchekedPatients}.`);

    

}

hospital([`6`,
`25`,
`25`,
`25`,
`25`,
`25`,
`2`])
