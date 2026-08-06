# Личный сервер 109.172.100.20 — Windows (только с личного ПК)

Сервер **не связан** с Medoria (109.73.201.4). Настройка только на вашем Windows-ПК.

---

## 1. OpenSSH (если ещё нет)

PowerShell **от администратора**:

```powershell
Get-WindowsCapability -Online | Where-Object Name -like 'OpenSSH.Client*'
Add-WindowsCapability -Online -Name OpenSSH.Client~~~~0.0.1.0
```

Проверка:

```powershell
ssh -V
```

---

## 2. Отдельный ключ для личного сервера

PowerShell (обычный пользователь):

```powershell
ssh-keygen -t ed25519 -f "$env:USERPROFILE\.ssh\id_ed25519_personal" -C "personal-server172"
```

Показать публичный ключ:

```powershell
Get-Content "$env:USERPROFILE\.ssh\id_ed25519_personal.pub"
```

### Скопировать ключ на сервер

На Windows **нет** `ssh-copy-id`. Вариант A — одной командой (введёте пароль root):

```powershell
type $env:USERPROFILE\.ssh\id_ed25519_personal.pub | ssh root@109.172.100.20 "mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"
```

Вариант B — вручную: скопировать строку из `.pub`, на сервере добавить в `/root/.ssh/authorized_keys`.

Проверка:

```powershell
ssh -i "$env:USERPROFILE\.ssh\id_ed25519_personal" root@109.172.100.20 "hostname; whoami"
```

---

## 3. Файл SSH config на Windows

Путь: `C:\Users\<ВашЛогин>\.ssh\config`  
(если нет папки `.ssh` — создайте)

```
# Medoria (рабочий)
Host server109
    HostName 109.73.201.4
    User root
    IdentityFile C:/Users/<ВашЛогин>/.ssh/id_rsa

# Личный сервер (изолированно)
Host server172
    HostName 109.172.100.20
    User root
    IdentityFile C:/Users/<ВашЛогин>/.ssh/id_ed25519_personal
    IdentitiesOnly yes
```

Замените `<ВашЛогин>` на имя пользователя Windows.  
В config используйте **прямые слэши** `/`, не `\`.

Проверка:

```powershell
ssh server172 "echo personal OK"
```

---

## 4. Cursor на Windows

Файл настроек:

`%APPDATA%\Cursor\User\settings.json`

Полный путь обычно:

`C:\Users\<ВашЛогин>\AppData\Roaming\Cursor\User\settings.json`

Добавьте (или дополните):

```json
"remote.SSH.remotePlatform": {
    "server109": "linux",
    "server172": "linux"
}
```

Опционально — явный путь к config:

```json
"remote.SSH.configFile": "C:\\Users\\<ВашЛогин>\\.ssh\\config"
```

### Подключение в Cursor

1. `Ctrl+Shift+P`
2. **Remote-SSH: Connect to Host…**
3. Выбрать **server172**
4. Лучше **новое окно** — не смешивать с Medoria

---

## 5. Изоляция (кратко)

| Делать | Не делать |
|--------|-----------|
| Отдельный ключ `id_ed25519_personal` | Ключи с 109.73.201.4 на личный сервер |
| Подключение только с Windows-ПК | SSH с server109 на 109.172.100.20 |
| `IdentitiesOnly yes` для server172 | Один ключ на оба хоста |

---

*03.06.2026 — для личного ПК на Windows*
