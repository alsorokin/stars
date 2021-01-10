var dict = [
    // The Tower
    {
        key:   "The Tower",
        value: "Башня"
    },

    {
        key:   "Bashing Focus",
        value: "Сосредоточенные удары"
    },
    {
        key:   "Sprinter",
        value: "Спринтер"
    },
    {
        key:   "Siphoner",
        value: "Поглотитель"
    },
    {
        key:   "Warlord",
        value: "Военачальник"
    },

    // The Lover
    {
        key:   "The Lover",
        value: "Любовник"
    },

    {
        key:   "Mooncalf",
        value: "Неутомимая энергия"
    },
    {
        key:   "Arcanist",
        value: "Колдун"
    },
    {
        key:   "Healthy",
        value: "Крепкое здоровье"
    },
    {
        key:   "Tenacity",
        value: "Цепкость"
    },

    // The Shadow
    {
        key:   "The Shadow",
        value: "Тень"
    },

    {
        key:   "Befoul",
        value: "Осквернение"
    },
    {
        key:   "Shade",
        value: "Полумрак"
    },
    {
        key:   "Shadow Ward",
        value: "Оберег тени"
    },
    {
        key:   "Tumbling",
        value: "Прыгучесть"
    },

    // The Steed
    {
        key:   "The Steed",
        value: "Конь"
    },

    {
        key:   "Medium Armor Focus",
        value: "Уклон в средние доспехи"
    },
    {
        key:   "Ironclad",
        value: "Железная оболочка"
    },
    {
        key:   "Spellshield",
        value: "Колдовской щит"
    },
    {
        key:   "Resistant",
        value: "Упорство"
    },

    // The Lady
    {
        key:   "The Lady",
        value: "Леди"
    },

    {
        key:   "Light Armor Focus",
        value: "Уклон в лёгкие доспехи"
    },
    {
        key:   "Thick Skinned",
        value: "Толстокожесть"
    },
    {
        key:   "Hardy",
        value: "Крепость тела"
    },
    {
        key:   "Elemental Defender",
        value: "Стихийный защитник"
    },

    // The Lord
    {
        key:   "The Lord",
        value: "Лорд"
    },

    {
        key:   "Heavy Armor Focus",
        value: "Уклон в тяжёлые доспехи"
    },
    {
        key:   "Bastion",
        value: "Бастион"
    },
    {
        key:   "Expert Defender",
        value: "Опытный защитник"
    },
    {
        key:   "Quick Recovery",
        value: "Быстрое восстановление"
    },

    // The Apprentice
    {
        key:   "The Apprentice",
        value: "Ученик"
    },

    {
        key:   "Elemental Expert",
        value: "Знаток стихий"
    },
    {
        key:   "Spell Erosion",
        value: "Колдовская эрозия"
    },
    {
        key:   "Elfborn",
        value: "Эльфийская кровь"
    },
    {
        key:   "Blessed",
        value: "Благословение"
    },

    // The Atronach
    {
        key:   "The Atronach",
        value: "Атронах"
    },

    {
        key:   "Physical Weapon Expert",
        value: "Эксперт физического оружия"
    },
    {
        key:   "Shattering Blows",
        value: "Раскалывающие удары"
    },
    {
        key:   "Master-at-Arms",
        value: "Мастер оружия"
    },
    {
        key:   "Staff Expert",
        value: "Мастер владения посохом"
    },

    // The Ritual
    {
        key:   "The Ritual",
        value: "Ритуал"
    },

    {
        key:   "Thaumaturge",
        value: "Тауматург"
    },
    {
        key:   "Precise Strikes",
        value: "Точные удары"
    },
    {
        key:   "Piercing",
        value: "Пробитие"
    },
    {
        key:   "Mighty",
        value: "Могущество"
    }
];


window.onload = function () {
    var translatebutton = document.getElementById("translatebutton");
    translatebutton.onclick = translate;

    var welcomelabel = document.getElementById("welcomelabel");
    welcomelabel.innerText = "Добро пожаловать в переводчик звездограмм жизни! \n" +
                             "Просто вставьте английский текст звездограммы в первое поле и нажмите \"Перевести\".";
}

function translate() {
    var sourceTextBox = document.getElementById("sourceText");
    var sourceText = sourceTextBox.value.toLowerCase();
    var translationTextBox = document.getElementById("translationText");
    var translationText = sourceText;

    dict.forEach(function (entry) {
        translationText = translationText.replaceAll(entry.key.toLowerCase(), entry.value);
    });

    translationTextBox.value = translationText;
}
