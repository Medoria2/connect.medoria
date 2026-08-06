# Подключение Cursor / SSH к личному серверу 109.172.100.20

Рабочий сервер Medoria: **109.73.201.4** (алиас `server109`)  
Личный сервер: **109.172.100.20** (алиас `server172`)

Порт SSH на личном сервере открыт. С сервера Medoria вход по ключу `root` не проходит — ключ нужно добавить **с вашего Mac** (тот же, что для `server109`).

---

## 1. Добавить ключ на личный сервер (один раз)

На **Mac** в терминале (подставьте свой логин, если не `root`):

```bash
# Показать публичный ключ (тот же, что для server109)
cat ~/.ssh/id_rsa.pub
# или, если используете ed25519:
# cat ~/.ssh/id_ed25519.pub

# Скопировать ключ на личный сервер (запросит пароль, если ключа ещё нет)
ssh-copy-id -i ~/.ssh/id_rsa.pub root@109.172.100.20

# Проверка
ssh root@109.172.100.20 'hostname -I; whoami'
```

Если `ssh-copy-id` недоступен — вручную на **109.172.100.20** в `~/.ssh/authorized_keys` добавьте строку из `id_rsa.pub` / `id_ed25519.pub`.

---

## 2. Файл `~/.ssh/config` на Mac

Добавьте блок (не удаляя `server109`):

```
Host server109
    HostName 109.73.201.4
    User root
    IdentityFile ~/.ssh/id_rsa

Host server172
    HostName 109.172.100.20
    User root
    IdentityFile ~/.ssh/id_rsa
```

Если для Medoria используется `id_ed25519`, укажите его в обоих `IdentityFile`.

Проверка с Mac:

```bash
ssh server172 'echo OK'
```

---

## 3. Настройки Cursor на Mac

Файл: `~/Library/Application Support/Cursor/User/settings.json`

В `remote.SSH.remotePlatform` добавьте второй хост:

```json
"remote.SSH.remotePlatform": {
    "server109": "linux",
    "server172": "linux"
}
```

---

## 4. Подключение в Cursor

1. `Cmd+Shift+P` → **Remote-SSH: Connect to Host…**
2. Выбрать **server172**
3. Открыть папку на личном сервере (например `/root` или свой проект)

Два окна: одно на `server109` (Medoria), второе на `server172` (личные задачи).

---

## Если не подключается

| Симптом | Что проверить |
|--------|----------------|
| Permission denied (publickey) | Ключ с Mac не в `authorized_keys` на 109.172.100.20 |
| Connection timed out | Фаервол / VPN, порт 22 |
| Wrong user | Уточнить логин (не `root`) в `User` в config |

---

*Создано на server109, 03.06.2026*
