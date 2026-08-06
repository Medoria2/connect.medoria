# Личный сервер 109.172.100.20 — только с личного ПК

**Важно:** этот сервер не входит в инфраструктуру Medoria.
Не настраивать доступ с 109.73.201.4 (server109), не добавлять ключи с prod-сервера.

Настройка выполняется **только на вашем Mac** (том же, с которого вы подключаетесь к server109).

---

## 1. Отдельный SSH-ключ (рекомендуется)

На Mac:

```bash
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519_personal -C "personal-server172"
```

Публичный ключ:

```bash
cat ~/.ssh/id_ed25519_personal.pub
```

Скопировать на личный сервер (один раз, с Mac, по паролю):

```bash
ssh-copy-id -i ~/.ssh/id_ed25519_personal.pub root@109.172.100.20
```

Проверка **с Mac**:

```bash
ssh -i ~/.ssh/id_ed25519_personal root@109.172.100.20 'hostname; whoami'
```

---

## 2. `~/.ssh/config` на Mac (только локально)

Файл: `/Users/<ваш_user>/.ssh/config`

```
# --- Medoria (рабочий) ---
Host server109
    HostName 109.73.201.4
    User root
    IdentityFile ~/.ssh/id_rsa

# --- Личный сервер (изолированно, только с этого Mac) ---
Host server172
    HostName 109.172.100.20
    User root
    IdentityFile ~/.ssh/id_ed25519_personal
    IdentitiesOnly yes
```

`IdentitiesOnly yes` — Cursor/SSH не подставит ключи от server109.

Если для server109 уже другой ключ — не меняйте блок server109, добавьте только `server172`.

---

## 3. Cursor на Mac

`~/Library/Application Support/Cursor/User/settings.json`:

```json
"remote.SSH.remotePlatform": {
    "server109": "linux",
    "server172": "linux"
}
```

Подключение: **Remote-SSH: Connect to Host…** → `server172`.

Открывайте **отдельное окно** Cursor для личного сервера — не смешивайте с папками Medoria.

---

## 4. Чего не делать (изоляция)

| Не делать | Почему |
|-----------|--------|
| Копировать ключ `root@medoria_server` с 109.73.201.4 на 109.172.100.20 | Связывает prod и личный сервер |
| SSH с server109 на 109.172.100.20 | Личный сервер в «рабочей» сети |
| Один общий ключ для server109 и server172 | При компрометации одного — доступ к обоим |
| Добавлять 109.172.100.20 в документы Medoria / GitLab CI | Личная инфраструктура |

---

## 5. Проверка изоляции

С Mac после настройки:

```bash
ssh server172 'echo personal OK'
ssh server109 'echo medoria OK'
```

На личном сервере в `~/.ssh/authorized_keys` должны быть **только** ключи с вашего Mac (personal), не ключи с 109.73.201.4.

---

*Инструкция для настройки на личном ПК. Файл на server109 — только справка для скачивания; на prod ничего настраивать не нужно.*
