<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullName = $_POST["full_name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Write data to Excel file
    require 'PHPExcel/Classes/PHPExcel.php';
    $objPHPExcel = new PHPExcel();
    $objPHPExcel->setActiveSheetIndex(0);
    $objPHPExcel->getActiveSheet()->setCellValue('A1', 'Full Name');
    $objPHPExcel->getActiveSheet()->setCellValue('B1', 'Email');
    $objPHPExcel->getActiveSheet()->setCellValue('C1', 'Message');
    $row = 2;
    $objPHPExcel->getActiveSheet()->setCellValue('A' . $row, $fullName);
    $objPHPExcel->getActiveSheet()->setCellValue('B' . $row, $email);
    $objPHPExcel->getActiveSheet()->setCellValue('C' . $row, $message);

    $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
    $objWriter->save('contacts.xlsx');
}

