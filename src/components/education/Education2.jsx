import React from "react";
import EducationProp from "./EducationProp";
import avm from "./avm.jpg";
import nirma from "./nirma.jpg";

function Education2() {
    return (
        <div>
            <table>
                <tr>
                    <td>
                        <EducationProp
                            image={avm}
                            altText="AVM"
                            schoolName="Atmiya Vidya Mandir"
                            year="2008-2018"
                            grades="94.2% (Class 10th)"
                        />
                    </td>
                    <td>
                        <EducationProp
                            image={avm}
                            altText="AVM"
                            schoolName="Atmiya Vidya Mandir"
                            year="2018-2020"
                            grades="96.0% (Class 12th)"
                        />
                    </td>
                    <td>
                        <EducationProp
                            image={nirma}
                            altText="Nirma University"
                            schoolName="Institute of Technology, Nirma University"
                            year="2020-2024"
                            grades="7.89 CGPA (Sem-1)"
                        />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Education2;