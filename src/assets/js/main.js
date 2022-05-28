
const menuContainer = document.querySelector('.menu-items');
const liNav = document.getElementsByTagName("li");
const innWidt = window.innerWidth;
let generateMenu = '';
const BASE_URL = CONFIG().BASE_URL;

$(document).ready(function() {
    $("tr:even").css("background-color", "#FFF");
});
if (innWidt <= 767) {
    generateMenu = `
        <div class="menu-mobile menu-mobile-column">
        ${liNav[0].innerHTML}

        </div>
        <div class="menu-mobile">
            ${liNav[2].innerHTML}
            ${liNav[1].innerHTML}
        </div>  
    `;
    menuContainer.innerHTML = generateMenu
}

$(window).resize(function() {
    if (window.innerWidth >= 767) {
        document.querySelector(".menu").style.display = "none";
        document.getElementById("mySidenav").style.width = "0";
        document.querySelector(".closebtn").style.display = "none";
    } else {
        document.querySelector(".menu").style.display = "block";
    }

    if (window.innerWidth <= 767) {
        generateMenu = `
            <div class="menu-mobile menu-mobile-column">
                ${liNav[4].innerHTML}
            </div>
            <div class="menu-mobile">
            ${liNav[2].innerHTML}
            ${liNav[1].innerHTML}
            </div>  
        `;
        menuContainer.innerHTML = generateMenu

    } else {
        generateMenu = `
            <li class=""><a href="#" class="nav-link px-2 buttons__color">Проверить статус операции</a></li>
            <li>
            <select class="form-select select-lang bg-transparent shadow-none" aria-label="Default select example">
                <option selected>RU</option>
                <option value="1">EN</option>
                <option value="2">UA</option>
                <option value="3">RU</option>
            </select>
            </li>
            <li>
            <a href="#" class="nav-link px-2 link-dark user-cabinet__outter">
                <div class="user-cabinet"></div>
            </a>
            </li>
            <li><a href="#" class="nav-link px-2 buttons__color-outline diplay-center-flex">Обмен валют</a></li>
        `;
        menuContainer.innerHTML = generateMenu
    }
});


function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.querySelector(".menu").style.display = "none";
    document.querySelector(".closebtn").style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector(".menu").style.display = "block";
    document.querySelector(".closebtn").style.display = "none";
    document.body.style.overflowY = "auto";
    document.body.style.position = "unset";

}


(function($) {
    $(document).ready(function() {
        var customSelect = $(".custom-select");

        customSelect.each(function() {
            var thisCustomSelect = $(this),
                options = thisCustomSelect.find("option"),
                firstOptionText = options.first().text();

            var selectedItem = $("<div></div>", {
                    class: "selected-item"
                })
                .appendTo(thisCustomSelect)
                .text(firstOptionText);

            var allItems = $("<div></div>", {
                class: "all-items all-items-hide"
            }).appendTo(thisCustomSelect);

            options.each(function() {
                var that = $(this),
                    optionText = that.text();

                var item = $("<div></div>", {
                        class: "item",
                        on: {
                            click: function() {
                                var selectedOptionText = that.text();
                                selectedItem.text(selectedOptionText).removeClass("arrowanim");
                                allItems.addClass("all-items-hide");
                            }
                        }
                    })
                    .appendTo(allItems)
                    .text(optionText);
            });
        });

        var selectedItem = $(".selected-item"),
            allItems = $(".all-items");

        selectedItem.on("click", function(e) {
            var currentSelectedItem = $(this),
                currentAllItems = currentSelectedItem.next(".all-items");

            allItems.not(currentAllItems).addClass("all-items-hide");
            selectedItem.not(currentSelectedItem).removeClass("arrowanim");

            currentAllItems.toggleClass("all-items-hide");
            currentSelectedItem.toggleClass("arrowanim");

            e.stopPropagation();
        });

        $(document).on("click", function() {
            var opened = $(".all-items:not(.all-items-hide)"),
                index = opened.parent().index();

            customSelect
                .eq(index)
                .find(".all-items")
                .addClass("all-items-hide");
            customSelect
                .eq(index)
                .find(".selected-item")
                .removeClass("arrowanim");
        });
    });
})(jQuery);
const banks = () => {
    return axios.get(`${BASE_URL}/landing/banks`)
    .then(response => {
        const banks = document.querySelector('#banks_selector');
        const banks2 = document.querySelector('#banks_selector_take');
        response.data.data.map(v => {
            let option = document.createElement("option");
            option.value = v.id;
            option.text = v.name;
            let option2 = document.createElement("option");
            option2.value = v.id;
            option2.text = v.name;
            banks.appendChild(option);
            banks2.appendChild(option2);
        })
        return response.data.data
    })
    .catch(error => console.log(error))
}
const cities = () => {
    return axios.get(`${BASE_URL}/landing/cities`)
    .then(response => {
        const cities = document.querySelector('#cities_selector');
        const cities2 = document.querySelector('#cities_selector_take');
        response.data.data.map(v => {
            let option = document.createElement("option");
            option.value = v.id;
            option.text = v.name;
            let option2 = document.createElement("option");
            option2.value = v.id;
            option2.text = v.name;
            cities.appendChild(option);
            cities2.appendChild(option2);
        })
        return response.data.data
    })
    .catch(error => console.log(error))
}
const filterIcons = (currName) => {
    const objRun = {
        1: `<img class="img-coins" src="https://img.icons8.com/pastel-glyph/64/000000/tether--v1.png"/>`,
        2: `<img class="img-coins" src="https://img.icons8.com/pastel-glyph/64/000000/tron.png"/>`,
        3: `<img class="img-coins" src="https://img.icons8.com/pastel-glyph/64/000000/tether--v1.png"/>`,
        4: `<img class="img-coins" src="https://img.icons8.com/external-black-fill-lafs/64/000000/external-USDC-cryptocurrency-black-fill-lafs.png"/>`,
        5: `<img class="img-coins" src="https://img.icons8.com/pastel-glyph/64/000000/bitcoin--v1.png"/>`,
        6: `<img class="img-coins" src="https://img.icons8.com/external-black-fill-lafs/64/000000/external-Bitcoin-Cash-cryptocurrency-black-fill-lafs.png"/>`,
        7: `<img class="img-coins" src="https://img.icons8.com/ios/50/000000/ethereum.png"/>`,
        8: `<img class="img-coins" src="https://img.icons8.com/external-modern-lines-kalash/64/000000/external-cryptocurrency-currency-and-cryptocurrency-signs-modern-lines-kalash-2.png"/>`,
        9: `<img class="img-coins" src="https://img.icons8.com/ios/50/000000/monero.png"/>`,
        10: `<img class="img-coins" src="https://img.icons8.com/pastel-glyph/64/000000/ripple.png"/>`,
        11: `<img src="https://img.icons8.com/material-outlined/24/000000/us-dollar--v1.png"/>`,
    }
    return objRun[currName.id]
}
const cryptocurency = () => {
    return fetch(`${BASE_URL}/landing/currencies`)
    .then(response => response.json())
    .then(data => {
        const select = document.querySelector('#give_selector');
        const select2 = document.querySelector('#take_selector');
        localStorage.setItem('crypto', JSON.stringify(data.data));
        data.data.map(v => {
            if (v.name != 'USD') {
                let option1 = document.createElement("option");
                option1.value = v.id;
                option1.text = `${v.name}`;
                option1.setAttribute('data-icon',filterIcons(v))
                let option2 = document.createElement("option");
                option2.value = v.id;
                option2.text = v.name;
                option2.setAttribute('data-icon',filterIcons(v))
                select.appendChild(option1);
                select2.appendChild(option2);
            }
        })
        return data.data
    });
}

( () => {
    if (window.location.pathname == '/') {
        function formatText (icon) {
            return $('<span>' + $(icon.element).data('icon') + icon.text + '</span>');
        };

        $("#take_selector").select2({
            placeholder: "Select a programming language",
            allowClear: true,
            width: "50%",
            templateSelection: formatText,
            templateResult: formatText
        });
        $("#give_selector").select2({
            placeholder: "Select a programming language",
            allowClear: true,
            width: "50%",
            templateSelection: formatText,
            templateResult: formatText
        });
        $("#cities_selector").select2({
            placeholder: "Select a programming language",
            allowClear: true,
            width: "100%",
        });
        $("#banks_selector").select2({
            placeholder: "Select a programming language",
            allowClear: true,
            width: "100%",
        });
        $("#cities_selector_take").select2({
            placeholder: "Select a programming language",
            allowClear: true,
            width: "100%",
        });
        $("#banks_selector_take").select2({
            placeholder: "Select a programming language",
            allowClear: true,
            width: "100%",
        });
        $("#multiple").select2({
            placeholder: "Select a programming language",
            allowClear: true
        });

    $(".default_option").click(function(){
        $(this).parent().toggleClass("active");
        })
        
        $(".select_ul li").click(function(){
        var currentele = $(this).html();
        $(".default_option li").html(currentele);
        $(this).parents(".select_wrap").removeClass("active");
        })

    const giveSelect = document.getElementById('give_selector');
    const takeSelect = document.getElementById('take_selector');
    document.getElementById('giveInput').addEventListener('input', (e) => {
        if(e.target.value) {
            $('.calculate-button').addClass('calculate-button-show').show(500);
            $('#create-order').attr("style", "display: none !important");

        } else { 
            $('.calculate-button').slideUp();
        }
    });
    document.querySelector('.create-order').addEventListener('click', (e) => {
        $("#memo").hide();
        $("#card").hide();
        document.querySelector('.order-flow').innerHTML = `
        <strong>
        ${giveSelect.options[giveSelect.selectedIndex].innerText} <img width='30px' src="https://img.icons8.com/material-rounded/96/000000/move-right.png"/>
        ${takeSelect.options[takeSelect.selectedIndex].innerText}
        </strong>`
        if ($('#take-fiat-bank').is(':checked')) {
            $("#card").show();
            $("#cash").hide();
        }
        if (
            (
                giveSelect.options[giveSelect.selectedIndex].innerText === 'XRP' || 
                takeSelect.options[takeSelect.selectedIndex].innerText === 'XRP'
                ) || (
                giveSelect.options[giveSelect.selectedIndex].innerText === 'XMR' || 
                takeSelect.options[takeSelect.selectedIndex].innerText === 'XMR'
                )
            ) {
                $("#memo").show();

            }
    });
    document.getElementById('calculate').addEventListener('click',(e) => {
        const currency_from_id = Number(giveSelect.options[giveSelect.selectedIndex].value);
        const currency_to_id = Number(takeSelect.options[takeSelect.selectedIndex].value);
        const amount = Number(document.getElementById('giveInput').value);
        $('#calc-text').hide();
        $('#loading').attr('id', 'loading-pending');
        axios.post(`${BASE_URL}/landing/calculationOrder`, {
            calculation : {
                currency_from_id,
                currency_to_id,
                amount
            }
        }).then(function (response) {
            let result = response.data.calculation;
            $('#create-order').attr("style", "display: block !important; display: flex !important;");
            $('#calculate').hide();
            $('#loading-pending').attr('id', 'loading');
            $.notify(`Расчет: code ${response.status}`, 'success');

            $('.main_commission').text(`${result.main_commission}%`);
            $('.main_rate').text(`${result.rate}`);
            $('.main_crypto').text(takeSelect.options[takeSelect.selectedIndex].innerText);
            $('#takeInput').val(result.sum)
        }).catch(e => {
            $.notify(e.message, 'error');
            setTimeout(() => {
                $('#calc-text').show();
                $('#loading-pending').attr('id', 'loading');
            }, 2000);
        })
    
    })
    $('.choose-cash-point-take, .choose-cash-point').hide();
    document.addEventListener('input', (e) => {
        $('#create-order').attr("style", "display: none !important");
        $('#calculate').show();
        $('#calc-text').show();
        if (e.target.value == 'cash_give') {
            $($('.select2-container--default')[2]).hide()
            $('.choose-cash-point').show();
            $('.choose-cash-point-take').hide();
            document.querySelectorAll('input[value="crypto_take"]')[0].checked = true;
            dataCrypto.then(rows => {
                giveSelect.innerHTML = "";
                takeSelect.innerHTML = "";
                let option = document.createElement("option");
                option.value = rows[10].id;
                option.text = rows[10].name;
                option.setAttribute('data-icon',filterIcons(rows[10]))
                giveSelect.appendChild(option);
                rows[10].currencies.map(v => {
                    let option2 = document.createElement("option");
                    option2.value = v.id;
                    option2.text = v.name;
                    option2.setAttribute('data-icon',filterIcons(v))
                    takeSelect.appendChild(option2);
                })
            })
        } else if (e.target.value == 'cash_take') {
            $($('.select2-container--default')[5]).hide()
            $('.choose-cash-point').hide();
            $('.choose-cash-point-take').show();
            document.querySelectorAll('input[value="crypto_give"]')[0].checked = true
            dataCrypto.then(rows => {
                giveSelect.innerHTML = "";
                takeSelect.innerHTML = "";
                let option = document.createElement("option");
                option.value = rows[10].id;
                option.text = rows[10].name;
                option.setAttribute('data-icon',filterIcons(rows[10]))
                takeSelect.appendChild(option);
                rows[10].currencies.map(v => {
                    let option2 = document.createElement("option");
                    option2.value = v.id;
                    option2.text = v.name;
                    option2.setAttribute('data-icon',filterIcons(v))
                    giveSelect.appendChild(option2);
                })
            })
        } else if (e.target.value == 'crypto_give') {
            $('.choose-cash-point').hide();
            $('.choose-cash-point-take').hide();
            dataCrypto.then(rows => {
                giveSelect.innerHTML = "";
                takeSelect.innerHTML = "";
                rows.map(v => {
                    if (v.name != 'USD') {
                        let option1 = document.createElement("option");
                        option1.value = v.id;
                        option1.text = v.name;
                        option1.setAttribute('data-icon',filterIcons(v))
                        let option2 = document.createElement("option");
                        option2.value = v.id;
                        option2.text = v.name;
                        option2.setAttribute('data-icon',filterIcons(v))
                        giveSelect.appendChild(option1);
                        takeSelect.appendChild(option2);
                    }
                }) 
            })
        } else if (e.target.value == 'crypto_take') {
            $('.choose-cash-point').hide();
            $('.choose-cash-point-take').hide();
            dataCrypto.then(rows => {
                giveSelect.innerHTML = "";
                takeSelect.innerHTML = "";
                rows.map(v => {
                    if (v.name != 'USD') {
                        let option1 = document.createElement("option");
                        option1.value = v.id;
                        option1.text = v.name;
                        option1.setAttribute('data-icon',filterIcons(v))
                        let option2 = document.createElement("option");
                        option2.value = v.id;
                        option2.text = v.name;
                        option2.setAttribute('data-icon',filterIcons(v))
                        giveSelect.appendChild(option1);
                        takeSelect.appendChild(option2);
                    }
                }) 
            })
        } else if (e.target.value == 'fiat_give') {
            $('#banks_selector').hide();
            $('#cities_selector').show();
            $($('.select2-container--default')[2]).hide()
            $($('.select2-container--default')[1]).show()
        } else if (e.target.value == 'bank_give') {
            $('#banks_selector').show();
            $('#cities_selector').hide();
            $($('.select2-container--default')[2]).show()
            $($('.select2-container--default')[1]).hide()

        } else if (e.target.value == 'fiat_take') {
            $('#banks_selector_take').hide();
            $('#cities_selector_take').show();
            $($('.select2-container--default')[5]).hide()
            $($('.select2-container--default')[4]).show()
        } else if (e.target.value == 'bank_take') {
            $('#banks_selector_take').show();
            $('#cities_selector_take').hide();
            $($('.select2-container--default')[5]).show()
            $($('.select2-container--default')[4]).hide()
        }
    });
    const dataCrypto = cryptocurency();
    const dataCities = cities();
    const dataBanks = banks();
    
    giveSelect.onchange = (event) => {
        $('#create-order').attr("style", "display: none !important");
        $('#calculate').show();
        $('#calc-text').show();
        const checkedButtons = $('input:checked')[1].value;
        const ifTake = $('input:checked')[2].value;
        var inputText = event.target.value - 1;
        if (checkedButtons != 'cash_take') {
            if (ifTake !== 'cash_take') takeSelect.innerHTML = "";
            dataCrypto.then(rows => {
                rows[inputText].currencies.map(v => {
                    if (ifTake !== 'cash_take' && v.name !== 'USD') {
                        let option2 = document.createElement("option");
                        option2.value = v.id;
                        option2.text = v.name;
                        option2.setAttribute('data-icon',filterIcons(v))
                        takeSelect.appendChild(option2);
                    }
                })
            })
        }
    };
    takeSelect.onchange = (event) => {
        $('#create-order').attr("style", "display: none !important");
        $('#calculate').show();
        $('#calc-text').show();

    }
    let modal = document.getElementById("myModal");
    let btn = document.getElementById("create-order");
    let span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
    modal.style.display = "block";
    }
    span.onclick = function() {
    modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    document.querySelector('#create-order-last').addEventListener('click', () => {
        const giveSelect = document.getElementById('give_selector');
        const takeSelect = document.getElementById('take_selector');
        let first_name = $("input[name='name']").val()
        let last_name = $("input[name='surname']").val()
        let middle_name = $("input[name='patronicName']").val()
        let phone = $("input[name='phone']").val()
        let email = $("input[name='email']").val()
        let hash = $("input[name='hash']").val()
        let card = $("input[name='card']").val()
        let memo = $("input[name='memo']").val()
        const bankCity = document.querySelector('#banks_selector');
        const city = document.querySelector('#cities_selector');
        const bankCityTake = document.querySelector('#banks_selector_take');
        const cityTake = document.querySelector('#cities_selector_take');
        const currency_from_id = Number(giveSelect.options[giveSelect.selectedIndex].value);
        const currency_to_id = Number(takeSelect.options[takeSelect.selectedIndex].value);
        const amount = Number(document.getElementById('giveInput').value);

   
        const order = {};
        if ($('#give-fiat').is(':checked')) {
            if ($('#give-fiat-cash').is(':checked')) {
               order.city_id = Number(city.options[city.selectedIndex].value);
               order.bank_id = null;
            } else {
               order.city_id = null;
               order.bank_id = Number(bankCity.options[bankCity.selectedIndex].value);
            }
        } else if ($('#take-fiat').is(':checked')) {
           if ($('#take-fiat-cash').is(':checked')) {
               order.city_id = Number(cityTake.options[cityTake.selectedIndex].value);
               order.bank_id = null;
            } else {
               order.city_id = null;
               order.bank_id = Number(bankCityTake.options[bankCityTake.selectedIndex].value);
            }
        }
        axios({
            url: `${BASE_URL}/landing/createOrder`,
            method: 'post',
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              'X-Requested-With': 'XMLHttpRequest',
              'Accept': 'application/json'
            },
            data: {
                client: {
                    first_name,
                    last_name,
                    middle_name,
                    phone,
                    email,
                    password: "password",
                    password_confirmation: "password"
                },
                order: order.length > 0 ? order : {
                    city_id: null,
                    bank_id: null
                },
                calculation: {
                    currency_from_id,
                    currency_to_id,
                    amount
                },
                address: {
                    hash: hash ? hash : card,
                    memo,
                    txid: "6900e17d7386d5aff3741539059ea910c729634864268d9b3ba325c663a711fd"
                }
        }
          })
       .then(response => {
         $.notify(`Success: code 200`, 'success');
         localStorage.setItem('user', JSON.stringify(response.data));

           setTimeout(() => {
            window.location.pathname = '/cabinet'
           }, 2000);
        })
       .catch(error => {
        Object.entries(error.response.data.errors).map(v => {
            v[1].map(j => {
                $.notify(`${j}: code 422`, 'error');
            })
        })
        })
    })
 }


})()

if (window.location.pathname == '/cabinet') {

    let modal = document.getElementById("myModalCabinet");
    let span = document.getElementsByClassName("close")[0];
    let orderDetail = $('.order-detail');
    const user = JSON.parse(localStorage.getItem('user'));
    const {first_name, last_name} = user.order.client;
    const userInfo = document.getElementById('user_info');
    userInfo.innerHTML = `${first_name} ${last_name}`
    const getTransactions = () => {
    axios({
        url: `${BASE_URL}/cabinet/orders`,
        method: 'GET',
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'X-Requested-With': 'XMLHttpRequest',
          'Accept': 'application/json'
        }
      })
      .then(r => {
        $('tbody').empty();
        
        r.data.data.map(v => {
            const rowInsert = `
            <tr id='rowCheck'>
            <th scope="row">${v.id}
            </th>
            <td>${v.created_at}</td>
            <td>${v.amount}</td>
            <td>${v.rate}</td>
            <td>${v.sum}</td>
            <td> <span searchvalue="5" class="table-status table-status_${v.status.color}">${v.status.description}</span></td>
           </tr>
          `
            $('tbody').append(rowInsert);
        });
      
        document.querySelectorAll('table > tbody > #rowCheck')
        .forEach(e => e.addEventListener("click", function(e) {
            // Here, `this` refers to the element the event was hooked on
            let elementId = e.path[1].children[0].innerText;
            let result = r.data.data.filter(v => v.id == elementId);
            const {hash, memo} = result[0].deposit_address;
            let pushObj = '';
            orderDetail.empty();
            for (let k in result[0].deposit_address) {
                if (result[0].deposit_address[k]) {
                    pushObj = `
                    <h2>${k}: ${result[0].deposit_address[k]}</h2>
                    `
                    orderDetail.append(pushObj)
                }

            }
          
            modal.style.display = "block";
            span.onclick = function() {
            modal.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
        }));
      })
      .catch(e => window.location.href = '/login')
    }
    getTransactions();

    setInterval(() => {
        getTransactions();
    }, 5000);

    document.querySelector('#logout').addEventListener('click', () => {
        axios({
            url: `${BASE_URL}/logout`,
            method: 'POST',
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              'X-Requested-With': 'XMLHttpRequest',
              'Accept': 'application/json'
            }
          })
        .then(() => window.location.href = '/')
        .catch((errorRequest) => {
            window.onerror(`Error macro_cabinet: ${errorRequest}, \n request to ${ENV_PATH.SERVER}/cabinet/user`, window.location.href);
        })
    })

    const changePassword = () => {
        let old_password = document.querySelector('#passwordChangeLast').value;
        let new_password = document.querySelector('#passwordChangeFirst').value;
        let new_password_confirmation = document.querySelector('#passwordChange').value
        axios({
            url: `${BASE_URL}/cabinet/changePassword`,
            method: 'POST',
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              'X-Requested-With': 'XMLHttpRequest',
              'Accept': 'application/json'
            },
            data: {
                old_password,
                new_password,
                new_password_confirmation
            }
          })
          .then(r => {
            $.notify(`Your password has been changed: code ${r.status}`, 'success');
            const proceed = true;
            const signUp = document.querySelector('.signUp');
            const successModal = document.querySelector('.showToggle');
        
            if (proceed) {
                signUp.style.display = 'none';
                successModal.style.display = 'block';
            }
          })
          .catch(e => {
            Object.entries(e.response.data.errors).map(v => {
                v[1].map(j => {
                    $.notify(`${j}: code 422`, 'error');
                })
            })
          })
    }

}

if (window.location.pathname == '/register') {
    const checkRegister = () => {
        let first_name = $("input[name*='first_name']").val();
        let last_name = $("input[name*='last_name']").val();
        let middle_name = $("input[name*='middle_name']").val();
        let phone = $("input[name*='phone']").val();
        let email = $("input[name*='email']").val();
        let password = $("input[name*='setPassword']").val();
        let password_confirmation = $("input[name*='setPasswordRepeat']").val();
        $.ajax({
            type: 'POST',
            url: `${BASE_URL}/register`,
            dataType: 'json',
            data: {
                first_name,
                last_name,
                middle_name,
                phone,
                email,
                password,
                password_confirmation
            },
            xhrFields: {
                withCredentials: true
            },
            success: (response) => {
                $.notify(`Register: code 200`, 'success');
                const proceed = true;
                const signUp = document.querySelector('.signUp');
                const successModal = document.querySelector('.showToggle');
            
                if (proceed) {
                    signUp.style.display = 'none';
                    successModal.style.display = 'block';
                }
            },
            error: (error) => {
                Object.entries(error.responseJSON.errors).map(v => {
                    v[1].map(j => {
                        $.notify(`${j} code 422`, 'error');
                    })
                })
            }
        })
      
    }
}

//login
if (window.location.pathname == '/login') {
    axios({
        url: `${BASE_URL}/cabinet/orders`,
        method: 'GET',
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'X-Requested-With': 'XMLHttpRequest',
          'Accept': 'application/json'
        }
      })
      .then(r => window.location.href = '/cabinet')
    document.querySelector('#login').addEventListener('click', () => {

        let email = $("input[name*='login_email']").val();
        let password = $("input[name*='login_password']").val();
        $.ajax({
            type: 'POST',
            url: `${BASE_URL}/login`,
            dataType: 'json',
            data: {
                email,
                password
            },
            xhrFields: {
                withCredentials: true
            },
            success: (response) => {
                $.notify(`Login: code 200`, 'success');
                window.location.href = '/cabinet';

            },
            error: (e) => {
                $.notify(`Check password or email: code 403`, 'error');
            }
        })
        // axios.post("http://127.0.0.1:8000/login", {
        //     email,
        //     password
        // })
        // .then(response => console.log(response))
        // .catch(e => console.log(e))
    })
}



// seletcor
function selectTe() {
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select-coins");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].querySelector("#take_selector");
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  console.log(a)
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
}