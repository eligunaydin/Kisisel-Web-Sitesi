<?php
    if(!$_POST){
        echo(Hatalı giriş yaptınız!);
    }
    else{
        $email=$_POST["email1"];
        $password=$_POST["password1"];
        $ip=$_SERVER["REMOTE_ADDR"];
        if(!$email){
            echo(E-mail boş bırakılamaz!);
        }
        else{
            if($password){
                echo(Şifre boş bırakılamaz!);
            }
            else{
                echo("Başarılı giriş yaptınız.")
            }
        }
    }
?>

<?php
    if(!$_POST){
        echo(Hatalı giriş yaptınız!);
    }
    else{
        $email2=$_POST["email2"];
        $mesaj2=$_POST["mesaj2"];
        $isim2=$_POST["isim2"];
        $ip=$_SERVER["REMOTE_ADDR"];
        if(!$isim2){
            echo(Ad soyad boş bırakılamaz!);
        }
        else{
            if($email2){
                echo(E-mail boş bırakılamaz!);
            }
            else{
                if($mesaj2){
                    echo(Boş mesaj atılamaz!);
                }
                else{
                    echo(Başarılı gönderim yaptınız!);
                }
            }
        }
    }
?>
