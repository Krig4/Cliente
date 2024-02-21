function ConsultaShow()
{
    $(".consulta").css("display", "block");
    $(".alta, .Password, .imagen").css("display", "none");
}

function AltaShow()
{
    $(".alta").css("display", "block");
    $(".consulta, .Password, .imagen").css("display", "none");
}

function PasswordShow()
{
    $(".Password").css("display", "block");
    $(".alta, .consulta, .imagen").css("display", "none");
}
